console.clear();
console.log(`======= MyDo To-Do CLI App =======\n`);
let rlSync = require('readline-sync');
let date = new Date();
let tomorrow = `
Here is your to-do list for ${date.getDate()+1}-${date.getMonth()}-${date.getFullYear()}.\n`;

let userSelectDay = rlSync.questionInt(`Enter 1 for today.\nEnter 2 for tomorrow.\nEnter 3 for all previous lists.\n\n`);

if (userSelectDay === 2) {
  console.log(`${tomorrow}`);
  console.log(`
    1. Do coding-dojo problems
    2. Arithmetic Class 7 and 8
    3. Read Spraul's Problem Solving book
    4. Read Polya's Analogy
    5. Improve MyDo App
  `
  );
}
