import {spawn} from "child_process";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
	const scriptPath = path.join(__dirname, "./files/script.js");

	const child = spawn("node", [scriptPath, ...args]);

	process.stdin.pipe(child.stdin);

	child.stdout.pipe(process.stdout);

	child.stderr.pipe(process.stderr);

	child.on("exit", (code) => {
		console.log(`Child process exited with code ${code}`);
	});
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
