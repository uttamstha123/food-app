import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
)
// var http = require("https"); 
// var options = { 
//  "method": "GET", 
//  "hostname": "get.xbyte.io", 
//  "port": null, 
//  "path": "/amz/product-details/?x-api-key=XXXXXXXXXXXXXX&asin=B079Y45KTJ&country_code=US", 
//  "headers": {} 
//  }; 
//  var req = http.request(options, function (res) { 
//  var chunks = []; 
//  res.on("data", function (chunk) { 
//  chunks.push(chunk); 
//  }); 
//  res.on("end", function () { 
//  var 
//  body = Buffer.concat(chunks); 
//  console.log(body.toString()); 
// }); 
// }); 
// req.end();