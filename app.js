const inserter = $I("","")
.setWord("STONKS!")
.setSelector("span");

console.info(inserter);

setTimeout(() => {
    inserter.populateHtmlWithWord();
}, 3000);



