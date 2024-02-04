import os from 'os';

class OS {
  EOL() {
    console.log(JSON.stringify(os.EOL));
  }

  cpus() {
    os.cpus().forEach((cpu, index) =>
      console.log(`CPU ${index + 1}: Model - ${cpu.model}, Speed - ${cpu.speed} MHz`)
    );
  }

  homedir() {
    console.log(os.homedir());
  }

  username() {
    console.log(os.userInfo().username);
  }

  architecture() {
    console.log(os.arch());
  }
}

export default new OS();