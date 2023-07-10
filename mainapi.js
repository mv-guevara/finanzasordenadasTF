function fetchCurrencyData() {
    fetch('http://data.fixer.io/api/latest?access_key=ec354f24e6091156d89f3ebd5da1afa1&format=1')
        .then(response => response.json())
        .then(data => {
      
        const table = document.getElementById('cotizaciones-euo');
        conversionResults.innerHTML = '';
    
        const currencies = ['ARS', 'COP','USD'];
        currencies.forEach(currency => {
          const rate = data.rates[currency];
          const result = `${currency}: ${rate}`;
          conversionResults.innerHTML += result+ '  ';
        
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
      window.onload = fetchCurrencyData;


