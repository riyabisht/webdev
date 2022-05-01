# Assignment 5

<B> Name :Riya Chaudhary </B><br>
<B> Roll : 51 </B><br>

## Ques1

Write a JavaScript function to chop a string into chunks of a given length

console.log(string_chop('welcome'));<br>
console.log(string_chop('welcome',2));<br>
console.log(string_chop('welcome',3));<br>

Output:<br>
["welcome"]
["we", "lc", "om", "e"]
["wel", "com", "e"]

```html
<<!DOCTYPE html>
<html lang="en">
  <head>
    <title>1</title>
    <script>
      function string_chop(str, n) {
        if (n == undefined) return [str];
        const a = [];
        for (i = n; i < str.length; i += n) {
          a.push(str.substring(i - n, i));
        }
        if (i >= str.length) a.push(str.substring(i - n));
        return a;
      }
      console.log(string_chop("welcome"));
      console.log(string_chop("welcome", 1));
      console.log(string_chop("welcome", 2));
      console.log(string_chop("welcome", 3));
    </script>
  </head>

  <body></body>
</html>
```

<div style="page-break-after: always"></div>

Output

![image](/out1.png)

## Ques2

Write a JavaScript function to convert a string to title case

console.log(sentenceCase('hoW aRe YOU'));

Output:
"How Are You"

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>2</title>
    <script>
      function helper(str) {
        if (str == "") return str;
        return str[0].toUpperCase() + str.substring(1).toLowerCase();
      }
      function sentenceCase(str) {
        return str.split(" ").map(helper).join(" ");
      }
      console.log(sentenceCase("hOW aRe YOU"));
    </script>
  </head>

  <body></body>
</html>
```

<div style="page-break-after: always"></div>

Output

![image](/out.png)

<div style="page-break-after: always"></div>

## Ques 3

An Evil number is a positive whole number which has even number of 1's in
it's binary equivalent.

Example: 9 - 1001, contains even no of 1's. Thus 9 is evil number.

Design a program to accept a positive whole number n where n > 2 and n < 100,
and find if the number is evil or not.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>3</title>
    <script>
      function isEvil(n) {
        c = 0;
        t = 1;
        while (n) {
          if (n & 1) c++;
          n = n >> 1;
        }
        if (c & 1) return false;
        else return true;
      }
      function evil() {
        n = Number(document.getElementById("input1").value);
        if (isNaN(n)) {
          alert("Enter a valid number");
          return;
        }
        if (n <= 2 || n >= 100) {
          document.getElementById("output").innerHTML = "Number out of Range";
          return;
        }
        if (isEvil(n)) {
          document.getElementById("output").innerHTML = "Evil Number";
        } else {
          document.getElementById("output").innerHTML = "Not and Evil number";
        }
      }
    </script>
  </head>

  <body>
    Input: <input id="input1" type="text" /> <br />
    Output: <label id="output"></label> <br />
    <input type="button" value="Check" onclick="evil()" />
  </body>
</html>
```

<div style="page-break-after: always"></div>

Output

![image](/out3.png)
