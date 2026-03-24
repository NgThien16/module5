import './App.css'
import React from "react";
import { getAll } from "./service/CityVietNam.js";

function App() {

  const cities = getAll();

  return React.createElement(
      "div",
      null,

      // h1
      React.createElement(
          "h1",
          null,
          "Danh sách các thành phố trực thuộc trung ương"
      ),

      // table
      React.createElement(
          "table",
          null,

          // thead
          React.createElement(
              "thead",
              null,
              React.createElement(
                  "tr",
                  null,
                  React.createElement("th", null, "STT"),
                  React.createElement("th", null, "ID"),
                  React.createElement("th", null, "Name")
              )
          ),

          // tbody
          React.createElement(
              "tbody",
              null,
              cities.map((city, i) =>
                  React.createElement(
                      "tr",
                      { key: city.id },
                      React.createElement("td", null, i + 1),
                      React.createElement("td", null, city.id),
                      React.createElement("td", null, city.name)
                  )
              )
          )
      )
  );
}

export default App;