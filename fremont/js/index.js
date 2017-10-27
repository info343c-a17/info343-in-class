//@ts-check
"use strict";

//last 24-hours of data from Fremont Bridge bike traffic
var dataURL = "https://data.seattle.gov/resource/4xy5-26gy.json?$order=date%20desc&$limit=24";

function parseAsJSON(response) {
  return response.json();
}

function handleError(err) {
  console.error(err);
  alert(err.message);
}

function renderRecord(record) {
  var tr = document.createElement("tr");
  var td = tr.appendChild(document.createElement("td"));
  td.textContent = moment(record.date).format("lll");
  
  td = tr.appendChild(document.createElement("td"));
  td.textContent = record.fremont_bridge_nb;
  td.classList.add("numeric");

  td = tr.appendChild(document.createElement("td"));
  td.textContent = record.fremont_bridge_sb;
  td.classList.add("numeric");

  return tr;
}

function renderTable(data) {
  console.log(data);
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  
  //data is an array of objects
  data.forEach(function(record) {
    tbody.appendChild(renderRecord(record))
  });
}

fetch(dataURL)
  .then(parseAsJSON)
  .then(renderTable)
  .catch(handleError);

