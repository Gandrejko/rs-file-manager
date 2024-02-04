import fs from 'fs/promises';
import path from 'path';

export const deleteFile = async (filePath) => {
  try {
    await fs.rm(filePath);
  } catch {
    console.log('Operation failed');
  }
};