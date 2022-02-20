const fs = require("fs");

const createProxy = (rootObj, dbFile, path = []) => {
  const currentObj = path.reduce(
    (ahead, current, cursor) => ahead[current],
    rootObj
  );
  return new Proxy(currentObj, {
    get: (db, objName) => {
      const val = db[objName];
      if (val && typeof val === "object")
        return createProxy(rootObj, dbFile, [...path, objName]);
      else return val;
    },
    set: (db, objName, val) => {
      db[objName] = val;
      fs.writeFile(dbFile, JSON.stringify(rootObj),()=>{
        console.log("saved",rootObj)
      });
    },
  });
};

module.exports = function load(src) {
  const jsonString = fs.readFileSync(src, "utf8");
  const val = JSON.parse(jsonString);
  return createProxy(val, src, []);
};
