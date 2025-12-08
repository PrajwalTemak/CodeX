import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";
import { execute } from "../utils/execute.js";

export const runCode = async (req, res) => {
    try {
        const { language, code, input } = req.body;

        const fileId = uuid();
        let filename;

        if (language === "cpp") filename = `${fileId}.cpp`;
        if (language === "python") filename = `${fileId}.py`;
        if (language === "java") filename = "Main.java";

        const filePath = path.join(process.cwd(), "backend/temp", filename);

        fs.writeFileSync(filePath, code);

        const result = await execute(language, filename, input);

        return res.json(result);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
