const jsonian = require('../index');
const tables = jsonian('./testTable.json')
console.log(JSON.stringify(tables))

tables[Date.now()]="test1";
console.log(tables)