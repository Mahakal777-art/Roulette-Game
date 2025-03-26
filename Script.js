let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 1000;
document.getElementById("balance").innerText = balance;

function spinWheel() {
    const result = Math.random() < 0.5 ? "red" : "black";  
    document.getElementById("wheel").style.background = result;
    return result;
}

function placeBet(choice) {
    let betAmount = parseInt(document.getElementById("betAmount").value);
    if (betAmount > balance || betAmount <= 0) {
        alert("Invalid bet amount");
        return;
    }

    let result = spinWheel();
    if (result === choice) {
        balance += betAmount;
        document.getElementById("result").innerText = "You won! 🎉";
    } else {
        balance -= betAmount;
        document.getElementById("result").innerText = "You lost! 😢";
    }

    document.getElementById("balance").innerText = balance;
    localStorage.setItem("balance", balance);
}