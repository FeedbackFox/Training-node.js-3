var argv = process.argv;
var sum = 0;
var fs = require('fs')
for(let i = 2; i < argv.length; i++)
{
  sum += Number(argv[i]);

}
var count = argv.length - 2;
var avg;
avg  = sum / (argv.length - 2);
console.log(argv);
console.log("de som is " , sum);

let ans = "avg is: " + sum/count;

fs.writeFile('avg.txt', ans, ()=>{
console.log('finished');
fs.readFile('avg.txt', (err,data)=>{
console.log("De inhoud van mijn bestand is: " + data);
})
})
