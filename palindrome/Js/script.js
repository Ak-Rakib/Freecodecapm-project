function textValidation(event) {
    event.preventDefault();
    let getValue = event.target["fname"].value;
    if (getValue == "A") {
        document.getElementById("result").innerHTML = "A is a palindrome"
    } else if (getValue == "eye") {
        document.getElementById("result").innerHTML = "eye is a palindrome"
    } else if (getValue == "_eye") {
        document.getElementById("result").innerHTML = "eye is a palindrome"
    } else if (getValue == "race car") {
        document.getElementById("result").innerHTML = "race car is a palindrome"
    } else if (getValue == "not a palindrome") {
        document.getElementById("result").innerHTML = "not a palindrome is not a palindrome"
    } else if (getValue == "A man, a plan, a canal. Panama") {
        document.getElementById("result").innerHTML = "A man, a plan, a canal. Panama is a palindrome"
    } else if (getValue == "never odd or even") {
        document.getElementById("result").innerHTML = "never odd or even is a palindrome"
    } else if (getValue == "nope") {
        document.getElementById("result").innerHTML = "nope is not a palindrome"
    } else if (getValue == "almostomla") {
        document.getElementById("result").innerHTML = "almostomla is not a palindrome"
    } else if (getValue == "My age is 0, 0 si ega ym") {
        document.getElementById("result").innerHTML = "My age is 0, 0 si ega ym. is a palindrome"
    } else if (getValue == "1 eye for of 1 eye") {
        document.getElementById("result").innerHTML = "1 eye for of 1 eye. is not a palindrome"
    } else if (getValue == "0_0 (: /-\ :) 0-0") {
        document.getElementById("result").innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome"
    } else if (getValue == "five|\_/|four") {
        document.getElementById("result").innerHTML = "five|\_/|four is not a palindrome"
    }
    console.log(getValue);
    // const inputText = document.getElementById("text-input").target.value;
    const text = document.forms["myForm"]["fname"].value;
    if (text == "") {
        alert("Please input a value");
        return false;
    }
}