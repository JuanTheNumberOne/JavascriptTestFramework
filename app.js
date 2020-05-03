const inserter = $I()
.setLanguage($I.availableLanguages.english)
.setWord("STONKS");
console.info(inserter);

setTimeout(() => {
    inserter.populateHtmlWithWord();
}, 3000)



