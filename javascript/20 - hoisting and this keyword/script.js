function runHoisting() {
    let output = "";

    // var 
    output += "var x before declaration: " + x + " <br />";
    var x = 10;


    // exception handling - try... catch
    try {
        output += "let y before declaration: " + y + "<br />";
    } catch (error) {
        output += "error accessing 'let y' before declaration <br />";
    }

    let y = 20;


    // function
    output += greet() + "<br />";

    function greet() {
        return "Hello from hoisted function!";
    }

    document.getElementById("output").innerHTML = output;
}