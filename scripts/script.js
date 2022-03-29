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

function toProperCase(text){
    let words = text.split(" ");
    let properCaseText = "";
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);
        properCaseText += words[index] + " ";
    })
    return properCaseText.trim();
}

