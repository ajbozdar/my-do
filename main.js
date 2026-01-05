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
    [x] Task 1 
    [x] Task 2
    [x] Task 3
    [x] Task 4
    [ ] Task 5
    [ ] Task 6
    [ ] Task 7
    [ ] Task 8
    [ ] Task 9
    [ ] Task 0
    [ ] Improve MyDo App
  `
  );
} else if (userSelectDay === 2) {
  console.log(`${tomorrow}`);
  console.log(`
    No entry yet.
    `);
}
