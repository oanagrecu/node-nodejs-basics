import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
	const filePath = path.join(__dirname, "./files/fileToRead.txt");

	const stream = fs.createReadStream(filePath, "utf8");
	stream.pipe(process.stdout);

	stream.on("error", (err) => {
		console.error("Error reading the file:", err.message);
	});

    
	await new Promise((resolve) => stream.on("end", resolve));
};

await read();
