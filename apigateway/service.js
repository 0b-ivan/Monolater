const express = require("express");
const app = express();
const axios = require("axios");

app.get("/add/:num1/:num2", async (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  await makeHTTPRequestToService(process.env.ADD_SERVICE, "add", num1, num2, res);
  //await makeHTTPRequestToService(process.env.ADD_SERVICE, "", num1, num2, res);
});

app.get("/sub/:num1/:num2", async (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  await makeHTTPRequestToService(process.env.ADD_SERVICE, "sub", num1, num2, res);
  //await makeHTTPRequestToService(process.env.SUB_SERVICE, "", num1, num2, res);
});

app.get("/mul/:num1/:num2", async (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  await makeHTTPRequestToService(process.env.ADD_SERVICE, "mul", num1, num2, res);
  //await makeHTTPRequestToService(process.env.MUL_SERVICE, "", num1, num2, res);
});

app.get("/div/:num1/:num2", async (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;
  await makeHTTPRequestToService(process.env.ADD_SERVICE, "div", num1, num2, res);
  //await makeHTTPRequestToService(process.env.DIV_SERVICE, "", num1, num2, res);
});

app.get("/", (req, res) => {
  html = `
  <h1>Hallo! Hier läuft unser Server.</h1>
  <hr></hr>
  <div>${JSON.stringify(process.env)}</div>`;
  res.send(html);
});

app.listen(3000, () => {
  console.log("API Gateway started on port 3000");
});

async function makeHTTPRequestToService(ressource, service, num1, num2, res) {
  try {
    let result = "";
    if (service == "") {
      result = await axios.get(`http://${ressource}:3000/${num1}/${num2}`);
    } else {
      result = await axios.get(
        `http://${ressource}:3000/${service}/${num1}/${num2}`
      );
    }
    res.send(result.data);
  } catch (error) {
    res.send({ error: error.message });
  }
}
