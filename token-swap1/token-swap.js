function computeTokenSwaps(n, ratesList, q, queriesList) {
  const rates = {};
  const allTokens = {};
  let token1;
  // Parse token pairs and rates into a rates object
  for (let i = 0; i < n; i++) {
    const [t1, t2, r] = ratesList[i].split(", ");
    const rate = parseFloat(r);
    if (!rates[t1]) rates[t1] = {};
    if (!token1) token1 = t1;
    rates[t1][t2] = rate;
    allTokens[t1] = true;
    allTokens[t2] = true;
  }

  for (const t1 in allTokens) {
    if (rates[token1] && !rates[token1][t1]) {
      for (const t2 in allTokens) {
        if (rates[token1] && rates[token1][t2]) {
          if (rates[t2] && rates[t2][t1]) {
            rates[token1][t1] = rates[token1][t2] * rates[t2][t1]
          } else if (rates[t1] && rates[t1][t2]) {
            rates[token1][t1] = rates[token1][t2] * rates[t1][t2]
          }
        }
        continue;
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
    } else if (rates[t2] && rates[t2][t1]) {
        conversionRate = 1/rates[t2][t1];
    } else if (rates[token1] && rates[token1][t1] && rates[token1][t2]) {
        conversionRate = 1/rates[token1][t1] * 1/rates[token1][t2]
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
const queriesList = ["TokenC, TokenD, 10000", "TokenA, TokenC, 10000", "TokenB, TokenA, 10000", "TokenD, TokenB, 10000"];
computeTokenSwaps(n, ratesList, q, queriesList);
