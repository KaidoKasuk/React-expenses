import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const expensesFile = path.join(__dirname, "data", "expenses.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/expenses", async (req, res) => {
  const fileContent = await fs.readFile(expensesFile);
  const expensesData = JSON.parse(fileContent);
  res.status(200).json({ expenses: expensesData });
});

app.post("/add-expense", async (req, res) => {
  const expenseData = req.body;
  console.log(req.body);
  const newExpense = {
    ...expenseData,
    id: (Math.random() * 1000).toString(),
  };
  const fileContent = await fs.readFile(expensesFile, "utf-8");
  const expensesData = JSON.parse(fileContent);
  expensesData.push(newExpense);

  await fs.writeFile(expensesFile, JSON.stringify(expensesData));
  res.status(201).json({ message: "Expense is added" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
