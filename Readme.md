# Terminal CHat

This project is a Node.js application.

## Getting Started

### 1.Clone the repository:

```bash
git clone https://github.com/AbAyvazyan/terminal-chat.git
cd terminal-chat
```

### 2.Install Dependencies:

```bash
npm install
```

# Usage
## Command-Line Tool
This Node.js application includes a command-line tool for generating greeting messages. You can use the tool with various options to customize the greeting.

### Options:

* --name, -n: Specify the name to greet. Default is 'guest'.
* --level, -l: Specify the verbosity level. Default is 1.
  * Level 1: Simple greeting (e.g., "Hello, guest").
  * Level 2: Detailed greeting with date and time (e.g., "Hello, guest! (Date and Time: 2024-01-01 12:34:56)").
* --greeting, -g: Specify a custom greeting message. Default is 'Hello'.
* --language, -lang: Specify the language of the greeting. Default is 'en' (English).


### Basic Greeting:
```
node index.js --name John --level 1
```

### Output:
```
Hello, John!
```

### Detailed Greeting:
```
node index.js --name John --level 2
```

### Output:
```
Hello, John! (Date and Time: 2024-01-01 12:34:56)
```

### Custom Greeting:
```
node index.js -n Bob --greeting "Hey, welcome to Node js school"
```

### Output:
```
Hey, welcome to Node js school Bob.
```

### Change Language:(am,ru)
```
node index.js --language am -n Bob"
```

### Output:
```
Բարև, Bob!
```