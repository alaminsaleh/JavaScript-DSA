// Print the multiplication table of 7 (7 x 1 = 7 ... 7 x 10 = 70).

const number = 7;
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}
