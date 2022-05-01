/*
\w = [a-zA-Z0-9_] 
\W = every thing which is not letter, digit, underscore
\d = match digit
\D = match all non number
\s = whitespace character
\S = non whitesapce 
*/

let regex = /\w+@gmail.com$/
let lol = "riya152@gmail.com" 
console.log(lol);
console.log(lol.match(regex));

//{min match , max match}- min 2 match  and after , max match 
/*
1) If there are number, they must be at the end.
2) Letters can be lowercase and uppercase
3) At least two characters long. Two-letter names can't have numbers
 */
let r2 = /^[a-zA-Z]{2,}\d*$/i
let username = "a1523"
//console.log(username.match(r2));

let str2 = "ohhhhh no"
let r3 = /oh{2,} no/
//console.log(str2.match(r3));

// specify only the lower number of matches
str3 = "hxxxxzzzz"
let r4 = /x{2,}/
//['xxxx']

// match string "favorite" and "favourite"
str4 = "favorite"
let r5= /favou?rite/ // may or may not have a "u" 
//console.log(str4.match(r5));


// look ahead 
/* 
1- positive look ahead (?=<expression>)
2- negative look ahead (?!<expression>)
 */
let quit = "qu quick qwak"
re6 = /q(?=u)/g   
re7 = /q(?!u)/g
//console.log(quit.match(re6)); // return q not u check at - "qu , quick"
//console.log(quit.match(re7)); // return q not u  "qwak"

/*
passwords greater than 5 character long
have 2 consecutive digit

*/
re8 = /(?=\w{5})(?=\D*\d{2})/

/* 
Reuse pattern using capture group
1 - any string of letter with space after string 
\1 - 
*/
s1 = "riya riya"
r6 = /(\w+)\s\1/
//console.log(s1.match(r6));    // ["riya riya " , "riya"] 
/* 
-full expression
- what ever in the capture group
- "42 42 42 42 78732 83883"
- only 3 similar number separated by space 
 */

s2 = "42 42 42"
//console.log(s2);
r7 = /^(\d+)\s\1\s\1$/g
//console.log(s2.match(r7));


/*
- replace code comp with camp code
 */
//console.log("code camp");
"code camp".replace(/(\w+)\s(\w+)/,'$1 $2')

/* 
    remove whitespace at the beginning and end
    " Hello, World!  ";
*/
let hello = "  Hello, world! "
//console.log(hello);
let regx = /^\s+|\s+$/g 
//console.log(hello.replace(regx,""));
//console.log(hello);