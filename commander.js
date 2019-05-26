#!/usr/bin/env node


const program = require('commander');

const fs = require('fs');

// const exec = require('child_process').exec;


const pkg = require('./package.json');

const answers = {};
const startprogram = () => {
  const questions = [
    'Name',
    'Age',
  ];
  let count = 0;
  process.stdout.write(`Enter ${questions[count]} :`);
  process.stdin.on('data', (data) => {
    answers[questions[count]] = data.toString().trim();
    count += 1;
    if (count < questions.length) {
      process.stdout.write(`Enter  ${questions[count]} :`);
    } else {
      // console.dir(answers);
      const file = answers.Name;
      fs.appendFile(`${file}.txt`, JSON.stringify(answers), (err) => {
        if (err) throw err;
      });
      process.stdin.destroy();
    }
  });
};

program
  .version(pkg.version)
  .option('--init', 'initialise')
  .action(startprogram)
  .parse(process.argv);
