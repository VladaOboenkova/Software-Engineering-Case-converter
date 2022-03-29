//Converter to upper case
document.getElementById("upper-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toUpperCase();
})

//Converter to lower case
document.getElementById("lower-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toLowerCase();
})