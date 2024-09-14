function translateFunction() {
  let enteredText = document.getElementById("inputText").value;
  let inputLanguage = document.getElementById("inputLanguage").value;
  let outputLanguage = document.getElementById("outputLanguage").value;
  if (enteredText == "") {
    alert("Please Enter Input");
  } else {
    translateText(enteredText, inputLanguage, outputLanguage);
  }
}

async function translateText(enteredText, inputLanguage, outputLanguage) {
  try {
    let result = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: enteredText,
        source: inputLanguage,
        target: outputLanguage,
        format: "text",
      }),
      headers: { "Content-Type": "application/json" },
    });

    let output = await result.json();
    let convertedText = output.translatedText;
    showOutput(convertedText);
  } catch (error) {
    console.log(error);
  }
}

function showOutput(convertedText) {
  document.getElementById("outputText").value = convertedText;
}
