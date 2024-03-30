const { exec } = require('child_process');

class Terminal {
  constructor() {
    this.commandHistory = [];
    this.cwd = "";
    this.lock = false;
  }

  execute(command,callback) {
    let cwd = this.cwd || process.cwd();
    let commands = command.split('&&');
    const executeCommand = (i) => {
      if(i>=commands.length){
        return;
      }
      let currentCommand = commands[i].trim();
      if(currentCommand.startsWith('cd')){
        const directory = currentCommand.split(' ')[1];
        this.cwd = (this.cwd==="") ? `${directory}` : `${this.cwd}/${directory}`;
        cwd = this.cwd;
        i++;
        executeCommand(i);
      }else{
        exec(`cd ${cwd} && ${currentCommand}`, (error, stdout, stderr) => {
            this.cwd = process.cwd();
            if (error) {
                callback(error);
            } else if (stderr) {
                callback(stderr);
            } else {
                callback(null, stdout);
            }
            i++;
            executeCommand(i);
        });
      }
    }

    executeCommand(0);
    this.commandHistory.push(command);
  }

  showHistory() {
    console.log('Command history:');
    this.commandHistory.forEach((command, index) => {
      console.log(`${index + 1}. ${command}`);
    });
  }
}

module.exports = {
    Terminal: Terminal
}