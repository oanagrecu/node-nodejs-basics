import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import {createGunzip} from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
	const inputFilePath = path.join(__dirname, "./files/archive.gz");
	const outputFilePath = path.join(__dirname, "./files/fileToCompress.txt");

	const inputStream = fs.createReadStream(inputFilePath);
	const outputStream = fs.createWriteStream(outputFilePath);
	const gunzip = createGunzip();

	inputStream.pipe(gunzip).pipe(outputStream);

	await new Promise((resolve) => outputStream.on("finish", resolve));
};

await decompress();
