function calculateSIP() {
    // Get input values
    const monthlyAmount = parseFloat(document.getElementById("amount").value);
    const years = parseInt(document.getElementById("years").value);
    const annualRate = parseFloat(document.getElementById("rate").value);

    if (isNaN(monthlyAmount) || isNaN(years) || isNaN(annualRate)) {
        alert("Please fill in all fields correctly!");
        return;
    }

    // Convert annual rate to monthly rate
    const monthlyRate = annualRate / 12 / 100;

    // Total number of months
    const totalMonths = years * 12;

    // Calculate future value
    let futureValue = 0;
    for (let month = 1; month <= totalMonths; month++) {
        futureValue = (futureValue + monthlyAmount) * (1 + monthlyRate);
    }

    // Display the result
    document.getElementById("result").innerHTML = 
        `Your SIP will grow to <strong>₹${futureValue.toFixed(2)}</strong> in ${years} years.`;
}
