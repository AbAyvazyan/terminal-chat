const { Command } = require('commander');
const moment = require('moment');


const program = new Command();

program
    .option('-n, --name <name>', 'name to greet', 'guest')
    .option('-l, --level <level>', 'verbosity level', '1')
    .option('-g, --greeting <greeting>', 'custom greeting message', 'Hello')
    .option('-lang, --language <language>', 'language of the greeting', 'en');

program.parse(process.argv);

const options = program.opts();
const name = options.name;
const level = parseInt(options.level, 10);
const greeting = options.greeting;
const language = options.language;

function getCurrentDateTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

function getGreetingMessage(name, greeting) {
    switch (language) {
        case 'ru':
            return `Привет, ${name}!`;
        case 'am':
            return `Բարև, ${name}!`;
        case 'en':
            return `${greeting}, ${name}!`;
        default:
            return `${greeting}, ${name}!`;
    }
}

let message = getGreetingMessage(name, greeting);

if (level === 2) {
    message += ` (Date and Time: ${getCurrentDateTime()})`;
}

console.log(message);
