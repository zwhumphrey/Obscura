var currencyEl = document.getElementById('date');
var currencyDropdown = document.getElementById('currency-dropdown');
var currencyTextEl = document.getElementById('currency-text2');

currencyTextEl.textContent = "";

//Listener for Currency DropDown Selection. Fire Function to fill Text portion. 
currencyDropdown.addEventListener("change", function() {
  currencyTextEl.textContent = "Example: $100 can be exchanged for approximately " + (this.value*100) + " of these less applicable fees. If you receive substantially less, you are getting ripped off!";
})

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
  currencyEl.textContent = "*rates as of: " + date; 
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
    option += '<option value="' + rates.AUD.toFixed(2) +'">' +'Australian Dollar: ' + rates.AUD.toFixed(2) + "</option>"
    option += '<option value="' + rates.BRL.toFixed(2)  +'">' + 'Brazillian real: ' + rates.BRL.toFixed(2) + "</option>"
    option += '<option value="' + rates.GBP.toFixed(2) +'">' + 'British Pound: ' + rates.GBP.toFixed(2) + "</option>"
    option += '<option value="' + rates.CAD.toFixed(2) +'"selected>' + 'Canadian Dollar: ' + rates.CAD.toFixed(2) + "</option>"
    option += '<option value="' + rates.CNY.toFixed(2) +'">' + 'Chinese Yuan: ' + rates.CNY.toFixed(2) + "</option>"
    option += '<option value="' + rates.EUR.toFixed(2) +'">' + 'European Euro: ' + rates.EUR.toFixed(2) + "</option>"
    option += '<option value="' + rates.INR.toFixed(2) +'">' + 'Indian Ruppe: ' + rates.INR.toFixed(2) + "</option>"
    option += '<option value="' + rates.JPY.toFixed(2) +'">' + 'Japanese Yen: ' + rates.JPY.toFixed(2) + "</option>"
    option += '<option value="' + rates.MXN.toFixed(2) +'">' + 'Mexican Peso: ' + rates.MXN.toFixed(2) + "</option>"
    option += '<option value="' + rates.NZD.toFixed(2)  +'">' + 'New Zealand Dollar: ' + rates.NZD.toFixed(2) + "</option>"
    option += '<option value="' + rates.RUB.toFixed(2) +'">' + 'Russian Ruble: ' + rates.RUB.toFixed(2) + "</option>"
    option += '<option value="' + rates.ZAR.toFixed(2)  +'">' + 'South African Rand: ' + rates.ZAR.toFixed(2) + "</option>"
    option += '<option value="' + rates.CHF.toFixed(2)  +'">' + 'Swiss Franc: ' + rates.CHF.toFixed(2) + "</option>"
    option += '<option value="' + rates.THB.toFixed(2)  +'">' + 'Thailand Baht: ' + rates.THB.toFixed(2) + "</option>"
    option += '<option value="' + rates.AED.toFixed(2) +'">' + 'United Arab Emirates: ' + rates.AED.toFixed(2) + "</option>"
    
 currencyDropdown.innerHTML = option; 
}

console.log(countryCodesArray);

