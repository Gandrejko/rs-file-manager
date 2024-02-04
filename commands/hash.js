import fs from 'fs/promises';
import { createHash } from "crypto";

export const calculateHash = async (filePath) => {
  const content = await fs.readFile(filePath);
  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};