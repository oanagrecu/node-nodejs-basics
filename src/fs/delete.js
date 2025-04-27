import {unlink} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
<<<<<<< HEAD
	const filePath = path.join(__dirname, "files", "fileToRemove.txt");

	try {
		await unlink(filePath);
		console.log("File deleted successfully!");
	} catch (err) {
		throw new Error("FS operation failed");
	}
};

await remove();
=======
	// Write your code here
};

await remove();

>>>>>>> read-file
