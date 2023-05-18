
/*
    var - Function scoped / Global Scoped
    let,const - Block Scoped

    if you try to log var before its initialized,
    you will get undefined and not an error.

    if you try to access let and const before
    its declared you will get Reference error;

    for const, declaration and initialization should
    happen in the same line, not true for var and let.

    const variables cannot be reassigned, if they 
    are an array/object, elements/keys can be modified,
    they can be updated, but reassigning is not possible

    In the same scope, if you try to log let and const
    variables before they are initialized, you wil get
    'Cannot access 'b' before initialization'. This means
    they are also hoisted to the top of their respective
    scope, but we cannot access them as they are in the 
    Temporal Dead Zone.

*/


function example() {
    a = 0;
    console.log(a)
    // console.log(b) // Reference Error
    // console.log(c); // Reference Error

    {   
        // console.log(c); //TDZ - Temporal Dead Zone
        var a = 1;
        let b;
        const c = 3;
        b = 2;
        console.log(b);
        console.log(c);
    }

    console.log(a);
}

example();