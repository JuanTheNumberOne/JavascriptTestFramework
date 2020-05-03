(function (global, jQuery) {

    // Setting up the inserter library
    const Inserter = function(word, language) {
        return new Inserter.init(word, language);
    };

    Inserter.prototype = { test: "test"};

    // Create the property used to initialize
    Inserter.init = function(word, language) {
        this.word = word || "Insert";
        this.language = language || "en-GB";
    };

    // Set the prototype
    Inserter.init.prototype = Inserter.prototype;

    // Create the global object referencing the library object
    if (global && !global.hasOwnProperty(Inserter)) {
        global.Inserter = global.$I = Inserter;
    };

    return;
}(window, $));