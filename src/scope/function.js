//Function Scope (scope local)

function greeting() {
    let useName = 'Ana';
    console.log(useName);

    if (useName === 'Ana') {
        console.log(`Hello ${useName}!`)
    }
}
greeting();