async function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultDiv = document.getElementById("result");

  if (from === to) {
    resultDiv.innerText = "Result: Same currency selected!";
    return;
  }

  try {
    const response = await fetch(https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_plT2fwErpPtTLhgscRp2DJaRuMvLNjFfZLKlikhl&base_currency=${from}&currencies=${to});
    const data = await response.json();
    const rate = data.data[to];

    const converted = (amount * rate).toFixed(2);
    resultDiv.innerText = Result: ${converted} ${to};

    // Trigger bounce animation again
    resultDiv.style.animation = "none";
    void resultDiv.offsetWidth;
    resultDiv.style.animation = "bounceIn 0.6s ease";

  } catch (error) {
    resultDiv.innerText = "Error fetching exchange rate!";
    console.error("API Error:", error);
  }
}
