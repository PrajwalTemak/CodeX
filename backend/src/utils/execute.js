import { exec } from "child_process";
import path from "path";

export const execute = (language, filename, input) => {
    return new Promise((resolve) => {

        const filePath = path.join(process.cwd(), "backend/temp");
        let cmd = "";

        if (language === "cpp") {
            cmd = `docker run --rm -w /usr/src/app -v ${filePath}:/usr/src/app coderunner-cpp sh -c "g++ ${filename} -o output && echo '${input}' | ./output"`;
        }

        if (language === "python") {
            cmd = `docker run --rm -w /usr/src/app -v ${filePath}:/usr/src/app coderunner-python sh -c "echo '${input}' | python3 ${filename}"`;
        }

        if (language === "java") {
            cmd = `docker run --rm -w /usr/src/app -v ${filePath}:/usr/src/app coderunner-java sh -c "javac Main.java && echo '${input}' | java Main"`;
        }

        exec(cmd, (err, stdout, stderr) => {
            resolve({
                output: stdout,
                error: stderr || err?.message || "",
                status: err ? "error" : "success"
            });
        });
    });
};
