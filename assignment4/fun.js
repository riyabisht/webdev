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


