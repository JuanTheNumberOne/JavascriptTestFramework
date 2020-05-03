(function (global, jQuery) {
    // Setting up the inserter library
    const Inserter = function(word, language) {
        return new Inserter.init(word, language);
    };

    // Create the property used to initialize
    Inserter.init = function(word, language) {
        const self = this;
        self.language = returnSupportedLanguage(language, isLanguageSupported);
        self.word = word || insertedWord[self.language];
    };

    // Set the prototype of the inserter
    Inserter.prototype = { test: "test"};
    // Set the prototype of init to point to the prototype of Inserter
    Inserter.init.prototype = Inserter.prototype;

    // Language support ---------------------------------------------------------
    const supportedLanguages = {
        english: "en-GB",
        spanish: "es-SP",
        polish: "po-PO",
    };

    function returnSupportedLanguage(language, supportFunction) {
        if (supportFunction(language)) return language;

        displayLanguageNotSupportedError(language);
        return supportedLanguages.english;
    }

    function isLanguageSupported(language) {
        if (!language || typeof language !== "string") return false;

        return Object.keys(supportedLanguages).some((langKey) => 
            supportedLanguages[langKey] === language,
        );
    }

    function displayLanguageNotSupportedError(language) {
        console.error(`Provided language: ${language}, is nor supported, setting to english`);
        console.error(`Supported languages: `);
        for (const key in supportedLanguages) {
            if (supportedLanguages.hasOwnProperty(key)) {
                console.error(`${key} : ${supportedLanguages[key]}`);
            }
        }
    }

    //--------------------------------------------------------------------------
    
    // Inserted word  ----------------------------------------------------
    const insertedWord = (function(){
        const obj = {};
        obj[supportedLanguages.english] = "It just Works!";
        obj[supportedLanguages.spanish] = "Simplemente Funciona!";
        obj[supportedLanguages.polish] = "Po prostu Dziala!";

        return obj;
    })()
    // --------------------------------------------------------------------------

    // Create the global object referencing the library object
    if (global && !global.Inserter && !global.$I) {
        global.Inserter = global.$I = Inserter;
    };

    return;
}(window, $));