import fs from 'fs/promises';
import path from 'path';

export const createFile = async (currDir, fileName) => {
  try {
    await fs.writeFile(path.join(currDir, fileName), '', {flag: 'wx'});
  } catch {
    console.log('Operation failed');
  }
};