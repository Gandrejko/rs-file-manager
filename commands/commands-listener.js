import { homedir } from 'os';

const commands = {
  some: async (args) => {
    // some code...
  },
}

let currentDir = homedir();

const commandsListener = async (command, args) => {
  if(commands[command]) {
    await commands[command](args);
    console.log(currentDir);
    return;
  }
  console.log(`Invalid input.`);
};

export default commandsListener;