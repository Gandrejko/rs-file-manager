import { createReadStream } from 'fs';

export const showFileContent = async (filePath) => {
  try {
    await new Promise((resolve, reject) => {
      const readStream = createReadStream(filePath, "utf-8");
      let data = '';

      readStream.on('data', (chunk) => {
        data += chunk;
      });

      readStream.on('end', () => {
        console.log(`\n${data}\n`);
        resolve();
      });

      readStream.on('error', () => {
        console.log('Operation failed');
        reject();
      });
    });
  } catch {
    console.log('Operation failed');
  }
};