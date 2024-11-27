console.log('Welcome to Holberton School, what is your name?\n');
process.stdin.resume();
process.stdin.on('readable', () => {
 const name = process.stdin.read();
 if (process.stdin.isTTY) {
     process.exit();
} else {
  process.stdout.write('This important software is now closing\n');
  process.exit();
}
});
