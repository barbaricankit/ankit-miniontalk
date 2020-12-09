let inputText = document.querySelector("#inputTextArea");
let outputText = document.querySelector("#outputTextArea");
let translateBtn = document.querySelector("#btnTranslate");
let url = "https://api.funtranslations.com/translate/minion.json";

const eventHandler = (error) => {
  console.log(error);
};
const getUrl = () => {
  let inputValue = url + "?text=" + inputText.value;
  console.log(inputText.value);
  return inputValue;
};
const translator = () => {
  fetch(getUrl())
    .then((response) => response.json())
    .then((json) => {
      let outputValue = json.contents.translated;
      outputText.innerText = outputValue;
    })
    .catch(eventHandler);
};
translateBtn.addEventListener("click", translator);
