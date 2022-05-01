# Assignment 3

<B>  Name : Shivanshu</B><br>
<B>  Roll : 60    </B><br>

## Ques1

```html
<!DOCTYPE html>
<html lang="en">
    <head >
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>form</title>
        <link rel="stylesheet" href="styling.css">
    </head>
    <body>
        <form id="f">
                <Fieldset>
                <legend>Student Registration Form </legend>
                <label for="name1">Name </label>
                    <input type="text" id="name1"><br>
                <label for="name2">Father Name</label>
                    <input type="text" id="name2"><br>
                <label for="address">Postal Address</label>
                    <input type="text" id="address"><br>
                <label for="sex">Sex</label>
                    <input type="radio" id="sex">Male
                    <input type="radio" id="sex">Female
                    <br>
                <label for="city">City</label>
                    <select id="s1">
                        <option >select</option>
                        <option value="dehradun">dehradun</option>
                    </select><br>
                <label for="course">Course</label>
                    <select id="s2">
                        <option >select</option>
                        <option value="btech">BTech</option>
                        <option value="bse">bse</option>
                        <option value="mtech">MTech</option>
                    </select><br>
                <label for="District">District</label>
                    <select id="s3">
                        <option >select</option>
                        <option value="Chamoli">Chamoli</option>
                        <option value="Rudhrapryag">Rudhraprayag</option>
                    </select><br>
                <label for="State">State</label>
                    <select id="s4">
                        <option >select</option>
                        <option value="uttarakhand">Uttarakhand</option>
                    </select><br>
                <label for="pincode">Pincode</label>
                    <input type="number" id="pincode"><br>
                <label for="email">EmailId</label>
                    <input type="text" id="email"><br>
                <label for="dob">DOB</label>
                    <input type="text" id="dob"><br>
                <label for="mobile">Mobile No</label>
                    <input type="number" id="mobile"><br>
                <button id="b1">Reset</button>
                <button id="b2">Submit Form</button>
            </Fieldset>
        </form>
    </body> 
</html>
```
```CSS
body{
    margin: 20px 600px 100px 100px;
}
div{
    margin-top: 5px ;
}
```
<div style="page-break-after: always"></div>

output

![image](/media/riya/riya/BTech/6/webdev/assignment3/form1/form1.png)

<div style="page-break-after: always"></div>

## Ques2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form</title>
</head>
<body>
    <Fieldset id="field1">
    <div>
        <Fieldset>
        <legend>Personal Information</legend>
            <form id="1">
                <div class="row">
                    <div class="col1">  
                        <label for="i1" >First Name</label>
                    </div>
                    <div class="col2">
                        <input type="text" id="i1"><br>
                    </div>
                </div>
                <div class="row">
                    <div class="col1">
                        <label for="i3">Last Name</label>
                    </div class="col2">
                    <div>
                        <input type="text" id="i3"> <br>
                    </div>
                </div>
                <div class="row">
                    <div class="col1">
                        <label for="i2">Gender</label>
                    </div>
                    <div class="col2">
                        <input type="radio" id="i2">Female
                        <input type="radio" id="i2">Male <br>
                    </div>
                </div>

                <div class="row">
                    <div class="col1">
                        <label for="i4">Nationality</label>
                    </div>
                    <div class="col2">
                        <select id="i4">
                            <option>select</option>
                            <option value="indian">indian</option>
                            <option value="canadian">canadian</option>
                            <option value="german">German</option>
                        </select> <br>
                    </div>
                </div>
                <div class="row">
                    <div class="col1">
                        <label for="i5">Address</label>
                    </div>
                    <div class="col2">
                    <textarea name="address" id="i5" cols="30" rows="3"></textarea>
                    </div>
                </div>
            </Fieldset>
    </div>
    <div >
        <Fieldset>
            <legend>Medical History</legend>
            <form id="2">
            <input type="checkbox" class="A"> Smallpox
            <input type="checkbox" class="A"> Mumps
            <input type="checkbox" class="A"> Dizziness
            <input type="checkbox" class="A"> Sneezing
            </form>
        </Fieldset>
    </div>
    <div>
        <Fieldset>
            <legend>Current Medication</legend>
            <form id="3">
            <label for="i6">Are you currently taking any Medication ?</label>
            <input type="radio" id="i6">Yes
            <input type="radio" id="i6">No
            <p id="i7">If you are currently taking medication, please indicate it in the space below:</p>
            <textarea name="info" id="i7" cols="50" rows="7"></textarea><br>
            </form>
        </Fieldset>
    </div>
    <div class="button">
        <button id="b1">Submit</button>
        <button id="b1">Reset</button>
    </div>
</Fieldset>

</body>
</html>
```
<div style="page-break-after: always"></div>

`CSS`

```CSS
body{
    margin: 20px 600px 100px 100px;
} 
div{
    margin-top: 10px ;
}
.col1{
    float: left;
    width: 20%;
    margin-top: 10px;
    font-weight:normal
}
.col2{
    float: left;
    width: 75%;
    margin-top: 10px;
}
.button{
    color: aqua;
}
input{
    margin: 2px;
    
}
#field1{
    border-color: aqua;
}
legend{
    font-weight: 600;
}
label{
    font-weight:400;
}
textarea{
    border-radius: 5px;
}
```
<div style="page-break-after: always"></div>

Output

![image](/media/riya/riya/BTech/6/webdev/assignment3/form2/form2.png)
