function fetchCurrencyData() {
    fetch('https://bit.ly/3NJh1MY')
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


