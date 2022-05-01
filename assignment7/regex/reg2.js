let str1 = "Twtttttinkle 23 twinkle . 2 little 23star dog fish dish this is dish "
//console.log(str1);
let rex1 = /dog|cat|fish/
let result1 = rex1.test(str1)
//console.log(result1);

let rex2 = /twinkle/ig //case insensitive and global 
let result2 =  str1.match(rex2)
//console.log(result2);

/* extract match */

// wildcard period
//1. print words having one letter before is  "dis , fis , his"
let rex3 = /.is/g
let result3 = str1.match(rex3)
//console.log(result3);
//2.print words , with one letter after is
let rex4= /is./g
let result4 = str1.match(rex4)
//console.log(result4);

// single character with multiple Possibilities
let rex5 = /w[aeiou]n/g 
/*return all 3 letter starting with w and ending with n
,2rd letter any one among a,e,i,o,u  */
let result5 = str1.match(rex5)
//console.log(result5);

// match letters of alphabet
// letter can be anything between [a-z]
let rex6 = /[a-z]/ig
let result6 = str1.match(rex6)
//console.log(result6);

//match number and letter of alphabet
let rex7 = /[a-z0-9]/ig;
let result7 = str1.match(rex7)
////console.log(result7);

//don;t match if no or vowels
let rex8 = /[^0-9aeiou]/g
let result8= str1.match(rex8)
////console.log(result8);

//match character that  occour one or more times [t,ttt,ttttt,ttt]
let rex9 = /t+/gi
let result9= str1.match(rex9)
//console.log(result9);

//match character that occur zero or more times 
// [s-z]t* - any letter between "s-z" before t , t can occur 0 or more times
let rex10 = /[s-z]t*/gi
let result10= str1.match(rex10)
//console.log(result10)

//find character with lazy matching

let str2 = "<h1>Spring_**is coming at 7:00</h1>"
console.log(str2);
let re1 = /<.*>/
let re2 = /<.*?>/
//console.log(str2.match(re1)); //"<h1>Spring is coming</h1>"
//console.log(str2.match(re2));//"<h1>" - lazy match

// beginning of the string "^"
let re3 = /^tw/i
//console.log(str1.match(re3)); 

//match ending string patterns "$"
let re4 = /dish $/
console.log(str1.match(re4)); 

// match all letters and numbers
/*
\w = [a-zA-Z0-9_] 
\W = every thing which is not letter, digit, underscore
\d = match digit
\D = match all non number
\s = whitespace character
*/
let re5 = /\w/g
console.log(str2.match(re5)); 

let re6 = /\W/g
console.log(str2.match(re6)); 

let re7 = /\d/g
console.log(str2.match(re7)); 

let re8 = /\D/g
console.log(str2.match(re8)); 