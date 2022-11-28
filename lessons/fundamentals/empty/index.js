const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

async function respond() {
   let input = await ask('who are you')
    let cleanInput = await input.trim().toLowerCase();
  console.log('cleanInput',cleanInput)
    if(enemyList.includes(cleanInput)) {
      readlineInterface.setPrompt(`oh no enemy!`);
      readlineInterface.prompt();
    } else {
      readlineInterface.setPrompt(`hello           
      ${input}`);
      readlineInterface.prompt();
  }
}

respond()
