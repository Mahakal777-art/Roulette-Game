let balance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 1000;
document.getElementById("balance").innerText = balance;

function spinWheel() {
    const wheel = document.getElementById("wheel");
    let randomDegree = Math.floor(360 * 5 + Math.random() * 360); // Spin multiple times
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        let finalPosition = randomDegree % 360;
        let result = finalPosition < 180 ? "red" : "black";
        checkWin(result);
    }, 3000); // Wait for spin to finish
}

function placeBet(choice) {
    let betAmount = parseInt(document.getElementById("betAmount").value);
    if (betAmount > balance || betAmount <= 0) {
        alert("Invalid bet amount");
        return;
    }
    
    document.getElementById("result").innerText = "Spinning...";
    setTimeout(() => {
        spinWheel();
        localStorage.setItem("betChoice", choice);
        localStorage.setItem("betAmount", betAmount);
    }, 500);
}

function checkWin(result) {
    let choice = localStorage.getItem("betChoice");
    let betAmount = parseInt(localStorage.getItem("betAmount"));

    if (result === choice) {
        balance += betAmount;
        document.getElementById("result").innerText = `You won! 🎉 (${result.toUpperCase()})`;
    } else {
        balance -= betAmount;
        document.getElementById("result").innerText = `You lost! 😢 (${result.toUpperCase()})`;
    }

    document.getElementById("balance").innerText = balance;
    localStorage.setItem("balance", balance);
}
