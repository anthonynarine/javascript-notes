

////    LEXICAL SCOPE    \\\\

function outer(){
    let hero = "Julia";
//function declared  within a function
    function inner () {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp)
    }

    inner();
}

//function to demo scope within a function
function outerV2(){     //calling this function will output 
    let book = "Dune"  //the variable locally scoped in innverV2

    function innerV2(){
        let book = "A Game of Thrones"
        console.log(book)
    }
    innerV2();
}


////    a variable declared in on function is    \\\\
////   available to nested functions within it   \\\\ 