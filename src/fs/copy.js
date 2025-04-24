import {copyFile, mkdir, readdir, stat} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
	const sourceFolder = path.join(__dirname, "files");
	const destinationFolder = path.join(__dirname, "files_copy");

	try {
		await stat(sourceFolder);
	} catch {
		throw new Error("FS operation failed");
	}

	let destinationExists = true;
	try {
		await stat(destinationFolder);
	} catch {
		destinationExists = false;
	}

	if (destinationExists) {
		throw new Error("FS operation failed");
	}

	await mkdir(destinationFolder, {recursive: true});

	const files = await readdir(sourceFolder);

	for (const file of files) {
		const sourceFilePath = path.join(sourceFolder, file);
		const destinationFilePath = path.join(destinationFolder, file);
		await copyFile(sourceFilePath, destinationFilePath);
	}

	console.log("Files copied successfully!");
};

await copy();
