console.clear();
console.log(`======= MyDo To-Do CLI App =======\n`);
let rlSync = require('readline-sync');
let date = new Date();
let today = `
Here is your to-do list for today ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}.\n`;
let tomorrow = `
Here is your to-do list for ${date.getDate()+1}-${date.getMonth()}-${date.getFullYear()}.\n`;

let userSelectDay = rlSync.questionInt(`Enter 1 for today.\nEnter 2 for tomorrow.\nEnter 3 for all previous lists.\n\n`);

if (userSelectDay === 1) {
  console.log(`${today}`);
  console.log(`
    [x] Do coding-dojo problems
    [ ] Arithmetic Class 7 and 8
    [ ] Read Spraul's Problem Solving book
    [ ] Read Polya's Analogy
    [ ] Improve MyDo App
  `
  );
} else if (userSelectDay === 2) {
  console.log(`${tomorrow}`);
  console.log(`
    No entry yet.
    `);
}
