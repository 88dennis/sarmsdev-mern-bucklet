const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const IncomeRecord = require('./models/incomeCollection');
const ExpenseRecord = require('./models/expenseCollection');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/buckletapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', ()=>{
  console.log('Mongoose is connected');
});


////FINALLY CORRECT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  }


app.get("/api/incomeTransactions", async  (req, res)=> {
  await IncomeRecord.find({})
  .then(incomeList => {
    console.log(incomeList)
    res.json(incomeList)
  }
)
  .catch(err => res.status(400).json('Error: ' + err));
    console.log("Income")
    
});

app.get("/api/expenseTransactions", async (req, res)=> {
  console.log("Expenses")
  await ExpenseRecord.find({})
  .then(expenseList => {
    console.log(expenseList)
    res.json(expenseList)
  }
)
  .catch(err => res.status(400).json('Error: ' + err));
    console.log("Expense")
});

app.post("/addIncome", async (req, res)=> {
  console.log("addincome")
  console.log(req.body)

    const newIncome = new IncomeRecord(req.body);

    console.log(newIncome);
    await newIncome.save()
        .then((response)=> {
          console.log(response)  
          return res.json(response)
        })
        .catch(err => res.status(400).json('Error : ' + err));
  // res.json(req.body);
});

app.post("/addExpense", async (req, res)=> {
  console.log("add Expense")
  console.log(req.body)
    const newExpense = new ExpenseRecord(req.body);
    console.log(newExpense);
    await newExpense.save()
        .then((response)=> {
          console.log(response)  
          return res.json(response)
        })
        .catch(err => res.status(400).json('Error : ' + err));
  // res.json(req.body);
});

app.delete("/deleteExpense/:id", async (req, res)=> {
  console.log("deleted Expense")
  console.log(req.params.id)
  await ExpenseRecord.findByIdAndDelete(req.params.id)
        .then(() => res.json("Income Deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.delete("/deleteIncome/:id", async (req, res)=> {
  console.log("deleted Income")
  console.log(req.params.id)
await IncomeRecord.findByIdAndDelete(req.params.id)
        .then(() => res.json("Expense Deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});


////FINALLY CORRECT
if (process.env.NODE_ENV === 'production') {
  app.get('*', function(req,res){
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
  }

app.listen(PORT, ()=> {
    console.log(`Server connected to http://localhost:${PORT}`)
  })