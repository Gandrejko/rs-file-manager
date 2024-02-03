import path from "path";
import fs from "fs/promises";

export const changeDirectory = async (currDir, targetPath) => {
  let newPath;

  if (/^[a-zA-Z]:$/.test(targetPath)) {
    newPath = path.resolve(targetPath, "\\");
  } else if (targetPath === "..") {
    newPath = path.dirname(currDir);
  } else newPath = path.resolve(currDir, targetPath);

  try {
    const stats = await fs.stat(newPath);
    if (stats.isDirectory()) {
      return newPath;
    }
  } catch {
    console.log("Operation failed");
  }
  return currDir;
};