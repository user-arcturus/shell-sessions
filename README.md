# shell-sessions
A tool for executing commands locally , with a session saving system ( Multiple terminal instances can be run individually )
## Usage

```js
const { Terminal } = require('shell-sessions');

const session = new Terminal();
session.execute('cd folder' , (err, output) => {
  if (err) {
    console.error(err);
    return;
  }else{
    console.log(output);
  }
});
session.execute('dir' , (err, output) => {
  if (err) {
    console.error(err);
    return;
  }else{
    console.log(output);
  }
});

//outputs the files inside the directory "folder"
```

### Installation

Install the package using npm:

```bash
npm install shell-sessions
```
