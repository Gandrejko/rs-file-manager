import fs from 'fs/promises';
import path from 'path';

export const renameFile = async (currDir, oldName, newName) => {
  try {
    const oldFile = path.join(currDir, oldName);
    const newFile = path.join(currDir, newName);
    await fs.rename(oldFile, newFile);
  } catch {
    console.log('Operation failed');
  }
};