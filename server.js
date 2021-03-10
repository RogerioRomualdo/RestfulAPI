const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clients", (req, res) => {
  res.json(data);
});

app.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  const client = data.find((cli) => cli.id == id);
  if (!client) return res.status(204).json();
  res.json(client);
});

app.post("/clients", (req, res) => {
  const { name, email } = req.body;
  //Lógica de salvar o cliente
  res.json({ name, email });
});

app.put("/clients/:id", (req, res) => {
  const id = req.params;
  const client = data.find((cli) => cli.id == id);
  if (!client) return res.status(204).json();

  const { name } = req.body;
  client.name = name;
  res.json(client);
});

app.delete("/clients/:id", (req, res) => {
  const id = req.params;
  const clientes = data.filter((client) => {
    client.id != id;
  });
  res.json(clientes);
});

app.listen(3000, () => console.log("Server is running.."));
