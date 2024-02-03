import fs from 'fs/promises';
import path from 'path';

export const deleteFile = async (currDir, fileName) => {
  try {
    await fs.rm(path.join(currDir, fileName));
  } catch {
    console.log('Operation failed');
  }
};