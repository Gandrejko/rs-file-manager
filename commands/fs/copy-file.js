import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream';

export const copyFile = async (sourceFilePath, targetDirectoryPath) => {
  try {
    await new Promise((resolve, reject) => {
      const sourceFileStream = createReadStream(sourceFilePath);
      const targetFileStream = createWriteStream(path.join(targetDirectoryPath, path.basename(sourceFilePath)));
      pipeline(
        sourceFileStream,
        targetFileStream,
        (error) => error ? reject() : resolve()
      );
    });
  } catch {
    console.log('Operation failed');
  }
};