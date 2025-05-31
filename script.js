const exchangeRates = {
  USD: { INR: 83.2, EUR: 0.92 },
  INR: { USD: 0.012, EUR: 0.011 },
  EUR: { USD: 1.09, INR: 90.5 }
};

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultDiv = document.getElementById("result");

  if (from === to) {
    resultDiv.innerText = "Result: Same currency selected!";
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = (amount * rate).toFixed(2);
  resultDiv.innerText = `Result: ${converted} ${to}`;

  // trigger bounce animation again
  resultDiv.style.animation = "none";
  void resultDiv.offsetWidth;
  resultDiv.style.animation = "bounceIn 0.6s ease";
}
