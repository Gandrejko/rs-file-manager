import { homedir } from 'os';
import { changeDirectory } from './change-directory.js';
import { createFile } from './create-file.js';
import { deleteFile } from './delete-file.js';
import { list } from './list.js';
import { moveUp } from './move-up.js';
import { renameFile } from './rename-file.js';
import OS from './os.js';

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
    case 'os':
      if (!args || !OS[args[0].slice(2)]) {
        console.log(`Invalid input.`);
        break;
      }
      await OS[args[0].slice(2)]();
      break;
    default:
      console.log(`Invalid input.`);
      break;
  }
  console.log(currentDir);
};