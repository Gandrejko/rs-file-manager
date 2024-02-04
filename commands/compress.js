import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';

export const compress = async (sourceFilePath, zippedFilePath) => {
  try {
    const sourceFileStream = createReadStream(sourceFilePath);
    const zippedFileStream = createWriteStream(zippedFilePath);
    const zipStream = createBrotliCompress();
    await pipeline(
      sourceFileStream,
      zipStream,
      zippedFileStream,
      (error) => error && console.log('Operation failed')
    );
  } catch {
    console.log('Operation failed');
  }
};