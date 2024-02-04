import { createWriteStream, createReadStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';

export const decompress = async (sourceFilePath, unzippedFilePath) => {
  try {
    const sourceFileStream = createReadStream(sourceFilePath);
    const unzippedFileStream = createWriteStream(unzippedFilePath);
    const unzipStream = createBrotliDecompress();
    pipeline(
      sourceFileStream,
      unzipStream,
      unzippedFileStream,
      (error) => error && console.log('Operation failed')
    );
  } catch {
    console.log('Operation failed');
  }
};