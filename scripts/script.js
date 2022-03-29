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

//Converter to proper case
document.getElementById("proper-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = toProperCase(text);
})

function toSentenceCase(text){
    let sentences = text.split(/[.?!]/);
    let sentenceCaseText = "";
    let characters = [...text];
    let textMarks = [];
    for (let i = 0; i < characters.length; i++){
        if (characters[i] === "?" || characters[i] === "." || characters[i] === "!"){
            textMarks.push(characters[i]);
        }
    }
    sentences.forEach((sentence, index) => {
        if (sentence.charAt(0) !== " ") {
            sentences[index] = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        } else {
            let i = 1;
            while (sentence.charAt(i) === " "){
                i++;
            }
            sentences[index] = sentence.charAt(i).toUpperCase() + sentence.slice(i + 1).toLowerCase();
        }
        if (index !== sentences.length - 1) {
            sentenceCaseText += sentences[index] + textMarks[index] + " ";
        } else {
            sentenceCaseText += sentences[index];
        }

    })
    return sentenceCaseText.trim();
}

//Converter to sentence case
document.getElementById("sentence-case").addEventListener("click", function(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = toSentenceCase(text);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function (){
        download("text.txt", document.getElementById("textarea").value)
    }
)