var currencyEl = document.getElementById('currency');
var currencyDropdown = document.getElementById('currency-dropdown');

var countriesArray = [];
var countryCodesArray = [];
var option = ""; 
var rates = {};

var requestURL = 'https://api.exchangerate.host/latest?base=USD';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var data = request.response;
  console.log(data);
  sortProperties(data);
}

var sortProperties = function(data){
  //Assign Date to variable 
  var date = data.date; 
  //Assign Country Rates to variable 
  rates = data.rates; 
  //Convert Object to Array and store in countriesArray
  Object.entries(rates).map(item => {
    countriesArray.push(...item);
  })
  console.log(countriesArray[0]);
  console.log(countriesArray[2])
  currencyEl.textContent = "Today's Date: " + date; 
  PopulateCountryCodes(); 
  return rates; 
}

//Pull out country Codes from rates and store into countryCodesArray
var PopulateCountryCodes = function() {
  for(var i = 0; i < countriesArray.length; i += 2){
     countryCodesArray.push(countriesArray[i]);
  }
    dropDownList(); 
}

var dropDownList = function() {
    option += '<option value="' + countryCodesArray[7] +'">' +'Australian Dollar: ' + rates.AUD + "</option>"
    option += '<option value="' + countryCodesArray[22] +'"selected>' + 'Bitcoin: ' + rates.BTC + "</option>"
    option += '<option value="' + countryCodesArray[49] +'"selected>' + 'British Pound: ' + rates.GBP + "</option>"
    option += '<option value="' + countryCodesArray[26] +'"selected>' + 'Canadian Dollar: ' + rates.CAD + "</option>"
    option += '<option value="' + countryCodesArray[32] +'"selected>' + 'Chinese Yuan: ' + rates.CNY + "</option>"
    option += '<option value="' + countryCodesArray[46] +'"selected>' + 'European Euro: ' + rates.EUR + "</option>"
    option += '<option value="' + countryCodesArray[66] +'"selected>' + 'Indian Ruppe: ' + rates.INR + "</option>"
    option += '<option value="' + countryCodesArray[73] +'"selected>' + 'Japanese Yen: ' + rates.JPY + "</option>"
    option += '<option value="' + countryCodesArray[100] +'"selected>' + 'Mexican Peso: ' + rates.MXN + "</option>"
    option += '<option value="' + countryCodesArray[120] +'"selected>' + 'Russian Ruble: ' + rates.RUB + "</option>"
    option += '<option value="' + countryCodesArray[28] +'"selected>' + 'Swiss Franc: ' + rates.CHF + "</option>"
    option += '<option value="' + countryCodesArray[0] +'"selected>' + 'United Arab Emirates: ' + rates.AED + "</option>"
 currencyDropdown.innerHTML = option; 
}

console.log(countryCodesArray);