import {parentPort} from "worker_threads";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
	// This function sends result of nthFibonacci computations to main thread
	parentPort.on("message", (n) => {
		const result = nthFibonacci(n);
		parentPort.postMessage(result);
	});
};

sendResult();
