# shell-sessions
Source Code of my npm package , "shell-sessions"

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
