const wordName = document.getElementById('wordName');
const btn = document.getElementById('btn');
const isresult = document.getElementById("wordDetails");

async function fetchWordDetails(){
    const word = input.value;
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const jsonData = await result.json();
    isresult.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Word : <span>${jsonData[0].word}</span></h2>
    <p><strong>Part od Speech : </strong><span>${jsonData[0].meanings[0].partOfSpeech}</span></p>
    <p><strong>Meaning : </strong><span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
    <p><strong>Example : </strong><span>${jsonData[0].meanings[0].definitions[0].example}</span></p>
    <p><strong>Synonyms : </strong><span>${jsonData[0].meanings[0].synonyms}</span></p>`

    isresult.appendChild(div);
}
btn.addEventListener('onclick',fetchWordDetails);