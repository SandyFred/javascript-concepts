/*
    Closures is a combination of a function bundled 
    together with its lexical environment(outer scope)

    Closure is created during function creation.

    It has access to the variables in its outer scope
    even when it is executed outside the scope
*/


function parent() {
    let outer = 1;

    return function child() {
        let inner = 2;
        console.log(outer + inner);
    }
}

parent()();