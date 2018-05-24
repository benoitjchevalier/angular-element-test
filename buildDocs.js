// Read Synchrously
const fs = require("fs");

let content = JSON.parse(fs.readFileSync("doc.json")),
    newFormat = {
      properties: [],
      events: [],
      methods: [],
      privateProperties: [],
      privateMethods: []
    };

if(!content) {
  console.log('doc.json couldn\'t be found. Aborting.');
  return;
}

if(content.docs) {
  content.docs.forEach(element => {

  });
} else {
  console.log('No generated docs could be found in doc.json. Aborting.');
}


console.log(JSON.stringify(content));
console.log("\n *EXIT* \n");
