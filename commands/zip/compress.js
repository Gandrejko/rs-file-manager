import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';

export const compress = async (sourceFilePath, zippedFilePath) => {
  try {
    await new Promise((resolve, reject) => {
      const sourceFileStream = createReadStream(sourceFilePath);
      const zippedFileStream = createWriteStream(zippedFilePath);
      const zipStream = createBrotliCompress();
      pipeline(
        sourceFileStream,
        zipStream,
        zippedFileStream,
        (error) => error ? reject() : resolve()
      );
    });
  } catch {
    console.log('Operation failed');
  }
};