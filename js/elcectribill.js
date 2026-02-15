let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");
result = num1 - num2;

console.log("Result: ",result);

if (result <= 800) {
    console.log(result * 2);
}
else if (result > 800 && result <= 1600) {
    let x = 800;
    result = result - x;

    console.log((x * 2) + (result * 3));
}
else if (result > 1600 && result <= 2800) {
    let x = 800;
    let y = 800;
    result = result - x - y;
    console.log((x * 2) + (y * 3) +(result * 5));
}
else if (result > 2801 && result <= 8000) {
    let x = 800; // 2
    let y = 800; // 3
    let z = 1200 // 5
    result = result - x - y - z;
    console.log((x * 2) + (y * 3) + (z * 5) + (result * 7));
}
else {
    let a = 800; // 2
    let b = 800; // 3
    let c = 1200; // 5
    let d = 5200; // 7
    result = result - a - b - c - d;
    console.log((a * 2) + (b * 3) + (c * 5) + (d * 7) + (result * 8));
}