import fs from 'fs/promises';
import path from 'path';

export const renameFile = async (filePath, newName) => {
  try {
    const newFile = path.join(path.dirname(filePath), newName);
    await fs.rename(filePath, newFile);
  } catch {
    console.log('Operation failed');
  }
};