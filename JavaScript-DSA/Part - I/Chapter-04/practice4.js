for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let space = 1; space <= 5 - row; space++) {
        line += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
        line += "*";
    }
    console.log(line);
}


