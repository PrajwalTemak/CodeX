import fs from "fs";
import { v4 as uuid } from "uuid";

export const saveCodeToFile = async (language, code) => {
    const id = uuid();

    let filename = "";
    if (language === "cpp") filename = `${id}.cpp`;
    if (language === "python") filename = `${id}.py`;
    if (language === "java") filename = "Main.java"; // Java must use Main.java

    const filePath = `backend/temp/${filename}`;
    fs.writeFileSync(filePath, code);

    return { filename, filePath };
};
