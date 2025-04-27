import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import {createGzip} from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
	const inputFilePath = path.join(__dirname, "./files/fileToCompress.txt");
	const outputFilePath = path.join(__dirname, "./files/archive.gz");

	const inputStream = fs.createReadStream(inputFilePath);
	const outputStream = fs.createWriteStream(outputFilePath);
	const gzip = createGzip();

	inputStream.pipe(gzip).pipe(outputStream);

	await new Promise((resolve) => outputStream.on("finish", resolve));
};

await compress();
