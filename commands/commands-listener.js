import fs from 'fs/promises';
import { homedir } from 'os';
import { changeDirectory } from './change-directory.js';
import { list } from './list.js';
import { moveUp } from './move-up.js';

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
    default:
      console.log(`Invalid input.`);
      break;
  }
  console.log(currentDir);
};