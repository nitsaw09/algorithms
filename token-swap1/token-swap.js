function computeTokenSwaps(n, ratesList, q, queriesList) {
  const rates = {};
  const allTokens = {};

  // Parse token pairs and rates into a rates object
  for (let i = 0; i < n; i++) {
    const [t1, t2, r] = ratesList[i].split(", ");
    const rate = parseFloat(r);
    if (!rates[t1]) rates[t1] = {};
    rates[t1][t2] = rate;
    allTokens[t1] = true;
    allTokens[t2] = true;
  }

  // Compute all conversion rates using Floyd's algorithm
  let Token1;
  for (const k in allTokens) {
    for (const i in allTokens) {
      for (const j in allTokens) {
        if (rates[i] && rates[i][k] && rates[k] && rates[k][j]) {
          const newRate = rates[i][k] * rates[k][j];
          if (!rates[i][j] || newRate > rates[i][j]) {
            rates[i][j] = newRate;
            Token1 = i;
          }
        }
      }
    }
  }

  console.log(rates);
  // Process queries and print results
  for (let i = 0; i < q; i++) {
    const [t1, t2, amt] = queriesList[i].split(", ");
    let conversionRate;
    const amount = parseFloat(amt);
    if (rates[t1] && rates[t1][t2]) {
        conversionRate = rates[t1][t2];
    } else if (rates[t1] && rates[t2][t1]) {
        conversionRate = 1/rates[t2][t1];
    } else {
        conversionRate = 1/rates[Token1][t1] * 1/rates[Token1][t2]
    }
    
    if (conversionRate !== undefined) {
      const result = amount * conversionRate;
      console.log(result.toFixed(6));
    } else {
      console.log("Conversion rate not found");
    }
  }
}

// Example usage
const n = 3;
const ratesList = ["TokenA, TokenB, 1.2", "TokenB, TokenC, 0.003", "TokenA, TokenD, 0.0000005"];
const q = 4;
const queriesList = ["TokenA, TokenC, 10000", "TokenB, TokenA, 10000", "TokenD, TokenB, 10000", "TokenC, TokenD, 10000"];
computeTokenSwaps(n, ratesList, q, queriesList);