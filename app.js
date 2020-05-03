const inserter = $I("","")
.setWord("STONKS!");

console.info(inserter);

setTimeout(() => {
    inserter.populateHtmlWithWord();
}, 3000);



