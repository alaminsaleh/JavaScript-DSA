const temperature = 25;

const result = temperature > 32 ? "Hot" : temperature >= 20 && temperature <= 30 ? "Pleasant" : "Cold";
console.log(result);