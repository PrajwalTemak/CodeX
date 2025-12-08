import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

export const executeInDocker = async (language, filename, input) => {

    let command = "";

    if (language === "cpp") {
        command = `docker run --rm -v $(pwd)/backend/temp:/usr/src/app coderunner-cpp sh -c "g++ ${filename} -o output && echo '${input}' | ./output"`;
    }

    if (language === "python") {
        command = `docker run --rm -v $(pwd)/backend/temp:/usr/src/app coderunner-python sh -c "echo '${input}' | python3 ${filename}"`;
    }

    if (language === "java") {
        command = `docker run --rm -v $(pwd)/backend/temp:/usr/src/app coderunner-java sh -c "javac ${filename} && echo '${input}' | java Main"`;
    }

    try {
        const { stdout, stderr } = await execPromise(command, { timeout: 5000 });
        return { output: stdout, error: stderr };
    } catch (err) {
        return { output: "", error: err.stderr || err.message };
    }
};
