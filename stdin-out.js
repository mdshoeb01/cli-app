module.exports.init = () => {
  const fs = require('fs');
  const answers = {};
  const questions = [
    'Name',
    'Age'
  ];
  let count = 0;
  process.stdout.write(`Enter ${questions[count]} :`);
  process.stdin.on('data', (data) => {
    answers[questions[count]] = data.toString().trim();
    count += 1;
    if (count < questions.length) {
      process.stdout.write(`Enter  ${questions[count]} :`);
    } else {
      console.log(answers);
      const file = answers.Name;
      fs.appendFile(`${file}.txt`, JSON.stringify(answers), (err) => {
        if (err) throw err;
      })
      process.stdin.destroy();
    }
  })
}
