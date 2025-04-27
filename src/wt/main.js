import {Worker} from "worker_threads";
import os from "os";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
	const numCores = os.cpus().length;
	const results = [];

	const workerFile = path.join(__dirname, "./worker.js");

	const workers = Array.from({length: numCores}, (_, index) => {
		return new Promise((resolve) => {
			const worker = new Worker(workerFile, {type: "module"});

			worker.once("message", (data) => {
				resolve({status: "resolved", data});
			});

			worker.once("error", () => {
				resolve({status: "error", data: null});
			});

			worker.postMessage(10 + index);
		});
	});

	const workerResults = await Promise.all(workers);
	console.log(workerResults);
};

await performCalculations();
