import { homedir } from 'os';
import { changeDirectory } from './change-directory.js';
import { compress } from './compress.js';
import { copyFile } from './copy-file.js';
import { createFile } from './create-file.js';
import { decompress } from './decompress.js';
import { deleteFile } from './delete-file.js';
import { calculateHash } from './hash.js';
import { list } from './list.js';
import { moveFile } from './move-file.js';
import { moveUp } from './move-up.js';
import { renameFile } from './rename-file.js';
import OS from './os.js';
import { showFileContent } from './show-file-content.js';

let currentDir = homedir();

export const commandsListener = async (command, args) => {
  switch (command) {
    case 'up':
      currentDir = await moveUp(currentDir);
      break;
    case 'cd':
      if (!args) {
        console.log(`Invalid input.`);
        break;
      }
      currentDir = await changeDirectory(currentDir, args[0]);
      break;
    case 'ls':
      await list(currentDir);
      break;
    case 'cat':
      if (!args) {
        console.log(`Invalid input.`);
        break;
      }
      await showFileContent(args[0]);
      break;
    case 'add':
      if (!args) {
        console.log(`Invalid input.`);
        break;
      }
      await createFile(currentDir, args[0]);
      break;
    case 'rm':
      if (!args) {
        console.log(`Invalid input.`);
        break;
      }
      await deleteFile(currentDir, args[0]);
      break;
    case 'rn':
      if (!args || args.length !== 2) {
        console.log(`Invalid input.`);
        break;
      }
      await renameFile(currentDir, args[0], args[1]);
      break;
    case 'cp':
      if (!args || args.length !== 2) {
        console.log(`Invalid input.`);
        break;
      }
      await copyFile(args[0], args[1]);
      break;
    case 'mv':
      if (!args || args.length !== 2) {
        console.log(`Invalid input.`);
        break;
      }
      await moveFile(args[0], args[1]);
      break;
    case 'os':
      if (!args || !OS[args[0].slice(2)]) {
        console.log(`Invalid input.`);
        break;
      }
      await OS[args[0].slice(2)]();
      break;
    case 'hash':
      if (!args) {
        console.log(`Invalid input.`);
        break;
      }
      await calculateHash(args[0]);
      break;
    case 'compress':
      if (!args || args.length !== 2) {
        console.log(`Invalid input.`);
        break;
      }
      await compress(args[0], args[1]);
      break;
    case 'decompress':
      if (!args || args.length !== 2) {
        console.log(`Invalid input.`);
        break;
      }
      await decompress(args[0], args[1]);
      break;
    default:
      console.log(`Invalid input.`);
      break;
  }
  console.log(currentDir);
};