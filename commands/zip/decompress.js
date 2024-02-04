import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';

export const decompress = async (sourceFilePath, unzippedFilePath) => {
  try {
    await new Promise((resolve, reject) => {
      const sourceFileStream = createReadStream(sourceFilePath);
      const unzippedFileStream = createWriteStream(unzippedFilePath);
      const unzipStream = createBrotliDecompress();
      pipeline(
        sourceFileStream,
        unzipStream,
        unzippedFileStream,
        (error) => error ? reject() : resolve()
      );
    });
  } catch {
    console.log('Operation failed');
  }
};