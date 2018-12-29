const nlp = require('compromise')

window.analyze = analyze

function analyze() {
    const text = $('#txtMsg').val()
    var doc = nlp(text)

    var str = doc.nouns().toPlural().out('text')
    console.log(str)
}