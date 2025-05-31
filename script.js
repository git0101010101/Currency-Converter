async function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount!";
    return;
  }

  if (from === to) {
    resultDiv.innerText = "Result: Same currency selected!";
    return;
  }

  try {
    const response = await fetch(https://v6.exchangerate-api.com/v6/cbf71e747181bfba4de95523/latest/${from});
    const data = await response.json();

    if (data.result === "success") {
      const rate = data.conversion_rates[to];
      const converted = (amount * rate).toFixed(2);
      resultDiv.innerText = Result: ${converted} ${to};
    } else {
      resultDiv.innerText = "Error: API returned failure!";
    }
  } catch (error) {
    resultDiv.innerText = "Network Error! Please try again.";
  }

  // Animation
  resultDiv.style.animation = "none";
  void resultDiv.offsetWidth;
  resultDiv.style.animation = "bounceIn 0.6s ease";
}
