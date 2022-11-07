

////    LEXICAL SCOPE    \\\\

function outer(){
    let hero = "Julia";

    function inner () {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp)
    }

    inner();
}

function outerV2(){
    let book = "Dune"

    function innerV2(){
        console.log(book)
    }
    innerV2();
}