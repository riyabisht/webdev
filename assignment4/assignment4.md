# Assignment 4

<B>  Name :Riya Bisht </B><br>
<B>  Roll : 53   </B><br>

## Ques1

```html
<!DOCTYPE html>
<html>
    <head>
        <title>assignment4</title>
        <script src="fun.js"></script>
    </head>
    <body>
        <!-- Q1- covert 1st letter to upper case -->
        <div>
            <h1> Capitalize first letter </h1>
            <form id="form1">
                Enter string :<input type="text" id="1adata">
            </form>
            <button id="but1" onclick="capital()"> submit</button>
            <p id="an1"></p>
        </div>
        <!-- Q2- covert upper case to lower case and vice versa-->
        <div>
            <h1>Upper to Lower & lower to Upper</h1>
            <form id="3">
                Enter string:<input type="text" id="2data">
            </form>
            <button id="but2" onclick="fxn2()"> submit</button>
            <p id="an2"></p>
        </div>
        <!--Q3(a)- position of left Most vowel-->
        <div>
            <h1>position of left Most vowel</h1>
            <form id="3a">
                Enter string:<input type="text" id="3adata">
            </form>
            <button id="but3a" onclick="leftMostVowel()"> submit </button>
            <p id="ans3a"></p>
        </div>
        <!-- Q3(b)- reverse a number-->
        <div>
            <h1>Reverse a Number</h1>
            <form id="2" >
                Enter Number :<input type="number" id ="mynumber">
            </form>
            <button id="but4" onclick="rever()"> submit</button>
            <p id="an3">
            </p>
        </div>
        <!-- Q4- frequency of alphabet-->
        <div>
            <h1>Frequency of alphabet</h1>
            <form id="4">
                Enter string:<input type="text" id="4data">
            </form>
                <button id="but5" onclick ="frequency()"> submit</button>
            
            <p id="ans4"></p>
        </div>

    </body>
</html>
```
<div style="page-break-after: always"></div>

javascript

```js
// Q1- covert 1st letter to upper case 
function capital(){
    let str = document.getElementById("1adata").value;
    //console.log(str);
    var str2 =str.split(" ")
    //console.log(str2);
    var newString ="";
    for (let i = 0; i < str2.length; i++) {
            console.log(str2[i]); 
            newString+=str2[i][0].toUpperCase() + str2[i].slice(1)+" ";
    }  
    document.getElementById("an1").innerText = "ans ="+newString;
}

// Q2- covert upper case to lower case and vice versa
function fxn2(){
    let str = document.getElementById("2data").value;
    let newString="";
    for (let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase() )
            newString+=str[i].toUpperCase();
        else
            newString+=str[i].toLowerCase();
    }
    document.getElementById("an2").innerText="ans ="+newString;
}

// Q3(a) position of Left Most vowel
function leftMostVowel(){
    var string = document.getElementById("3adata").value;
    var index=0;
    for (let i = string.length-1; i >=0; i--) {
        if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
            {
                index = i+1;
                break;
            }
        }
        
    }
    if(index)
        document.getElementById("ans3a").innerText="ans ="+String(index);
    else
        document.getElementById("ans3a").innerText ="vowel not found";

}

// Q3(b) Reverse a number
function rever(){
    var num1 = document.getElementById("mynumber").value;
    //console.log(num1);
    let num2 =0;
    while(num1>0)
    {
        num2 = num2*10 + num1%10;
        num1=Math.floor(num1/10);
    }
    //console.log(num2);
    document.getElementById("an3").innerText="ans =" + String(num2);
}
//Q4 count occurrence of each alphabet
function frequency(){
    var string = document.getElementById("4data").value;
    var freq = new Map();
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        //check if key at index i is present or not 
        // if not present create a new key increment its value
        // else just increment the value
        if(freq.has(element))
            freq.set(element,freq.get(element)+1);
        else
            freq.set(element,1);
    }
    var text=""
    for(const [key,value] of freq){
        text+=String(key+' = '+value)+"\n";
    }
    document.getElementById("ans4").innerText = text;

    
}
```
![image](/assignment4/ans.png)
