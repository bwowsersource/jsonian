# jsonian
A nodejs module to persist json in file

## Install
```sh
npm i jsonian

or 

yarn add jsonian
```

## Usage

```js
const jsonian = require('jsonian');

const $table = jsonian('Students'); // file must already exist
```
`$table` is proxy to a root object. You can use it to get or set values as usual.
Setting `functions` in jsonian objects can cause errors during serialization. Don't do that.

```json
// './testTable.json' 
{
    "name": "Students"
}
```
```js
// to read value
var name = $table.name; // "Students"

// to write value to file
$table.name = "New_table_name"; // replaces "Students" in file './testTable.json' 
$table.rows = ["name","class"]; // adds new field "rows" in file './testTable.json'
```
> The `$` sign in the begining of `$table` is an indicator that it is a pure json object (jsonian proxy). I find it useful, to maintain a readable code. If you already use $ for something else feel free to come up with your own convention.

## Why?
No need to use getters and setters.
