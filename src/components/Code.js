import React, { Component } from 'react'

 class Code extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


//Fetch the price of Ethereum
const eth_api_url = 'https://api.cryptonator.com/api/ticker/eth-usd';
function ethereumHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
}
function ethereumGetData() {
    var request = ethereumHttpObject();
    request.open("GET", eth_api_url, false);
    request.send(null);
    console.log(request.responseText);
    return request.responseText;
}
function ethereumDataHandler() {
    var raw_data_string = ethereumGetData();

    var data = JSON.parse(raw_data_string);

    // var base = data.ticker.base;
    // var target = data.ticker.target;
    // var volume = data.ticker.volume;
    // var change = data.ticker.change;
    // var api_server_epoch_timestamp = data.timestamp;
    // var api_success = data.success;
    // var api_error = data.error;
    var price = data.ticker.price;
    return price;
}

document.getElementById("eth_val").innerHTML = "$" + Math.round(ethereumDataHandler());


//Fetch the price of Litecoin
const ltc_api_url = 'https://api.cryptonator.com/api/ticker/ltc-usd';
function litecoinHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
}
function litecoinGetData() {
    var request = litecoinHttpObject();
    request.open("GET", ltc_api_url, false);
    request.send(null);	
    return request.responseText;
}
function litecoinDataHandler() {
    var raw_data_string = litecoinGetData();
    var data = JSON.parse(raw_data_string);
    // var base = data.ticker.base;
    // var target = data.ticker.target;
    // var volume = data.ticker.volume;
    // var change = data.ticker.change;
    // var api_server_epoch_timestamp = data.timestamp;
    // var api_success = data.success;
    // var api_error = data.error;
    var price = data.ticker.price;
    return price;
}
document.getElementById("ltc_val").innerHTML = "$" + Math.round(litecoinDataHandler());

//Fetch the value of Bitcoin
const api_url = 'https://api.cryptonator.com/api/ticker/btc-usd';

const time_interval = 2;


function makeHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
}
function bitcoinGetData() {
    var request = makeHttpObject();
    request.open("GET", api_url, false);
    request.send(null);
    return request.responseText;
}
function bitcoinDataHandler() {
    var raw_data_string = bitcoinGetData();
    var data = JSON.parse(raw_data_string);
    // var base = data.ticker.base;
    // var target = data.ticker.target;
    // var volume = data.ticker.volume;
    // var change = data.ticker.change;
    // var api_server_epoch_timestamp = data.timestamp;
    // var api_success = data.success;
    // var api_error = data.error;
    var price = data.ticker.price;
    return price;
}

document.getElementById("btc_val").innerHTML = "$" + Math.round(bitcoinDataHandler());

export default Code;