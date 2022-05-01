 /* modifiers 
    - g(global)
    - i(case insensitive)
    - m(multiline match)

    function 
    1.exec() - return the result along with its info if result 
    2.test() - return true if result is true 
    3.match() - return array of result or null
    4.search() - return index of first match
    5.replace() - replace the given word with where regexp match

    object 
    .input
    .index
    .source
    */

    let reg1 = /hi/g;
    let reg2 = /riya/i;
    //console.log(reg.source); // show the regular expression literal
    let s = " my name hi is hi Riya good to see ya";
    let a = " riya is good girl riya is best happy girl"
    //console.log(a);
    console.log(s);
    result1 = reg1.exec(s);
    //console.log(result1);

    let result2 = reg2.test(s);
    //console.log(result2);

    let result3 = s.match(reg1)
    //console.log(result3); // ['hi','hi']

    let result4 = s.search(reg2);
    //console.log(result4);

    let result5 = s.replace(reg1,"BISHT");
    console.log(result5);
