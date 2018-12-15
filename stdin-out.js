module.exports.init=() => {
const fs = require('fs');
let answers={};
// function init(){
  let questions=[
    "Name",
    "Age "
  ];
  let count=0;
  process.stdout.write(`Enter ${questions[count]} :`);
  process.stdin.on('data',(data)=>{
    answers[questions[count]]=data.toString().trim();
    count++;
    if(count<questions.length){
      process.stdout.write(`Enter  ${questions[count]} :`);
    }
    else{
      console.log(answers);
      let file=answers.Name;
      fs.appendFile(file+".txt", JSON.stringify(answers), (err)=>{
        if(err) throw err;

      })
      process.stdin.destroy();
    }
  })
}
