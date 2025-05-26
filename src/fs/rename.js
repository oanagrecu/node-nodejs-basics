import {rename as fsRename, stat} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
	const folderPath = path.join(__dirname, "files");
	const oldPath = path.join(folderPath, "wrongFilename.txt");
	const newPath = path.join(folderPath, "properFilename.md");

	try {
		await stat(oldPath);
		await stat(newPath);
		throw new Error("FS operation failed");
	} catch (err) {
		if (err.code !== "ENOENT") throw new Error("FS operation failed");
	}

	try {
		await fsRename(oldPath, newPath);
		console.log("File renamed successfully.");
	} catch {
		throw new Error("FS operation failed");
	}
};

await rename();
