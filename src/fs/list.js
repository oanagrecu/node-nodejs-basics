import {readdir, stat} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
	const folderPath = path.join(__dirname, "files");

	try {
		await stat(folderPath); 
		const files = await readdir(folderPath); 
		console.log(files); 
	} catch {
		throw new Error("FS operation failed");
	}
};

await list();
