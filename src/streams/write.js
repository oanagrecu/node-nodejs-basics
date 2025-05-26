import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
	const filePath = path.join(__dirname, "./files/fileToWrite.txt");

	const stream = fs.createWriteStream(filePath, "utf8");

	process.stdin.pipe(stream);

	await new Promise((resolve) => stream.on("finish", resolve));
};

await write();
