import { homedir } from 'os';
import readline from 'readline';
import util from 'util';
import { commandsListener } from './commands/commands-listener.js';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Guest';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const end = () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye! \n`);
  rl.close();
  process.exit();
};

rl.on('SIGINT', end);

const start = async () => {
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${homedir()}`);

  while (true) {
    try {
      const userInputValue = await util
        .promisify(rl.question)
        .call(rl, '> ');

      const [userCommand, ...userArgs] = userInputValue.split(' ');

      userCommand === 'exit' || userCommand === '.exit'
        ? end()
        : await commandsListener(userCommand, userArgs);
    } catch (e) {
      console.error(e);
    }
  }
};

start();

