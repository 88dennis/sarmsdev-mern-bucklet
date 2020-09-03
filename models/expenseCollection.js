const mongoose = require('mongoose');

//SCHEMA
const Schema = mongoose.Schema;
const ExpenseSchema = new Schema({
    id: String,
    expenseText: String,
    expenseAmount: Number,
});

//MODEL
//register your schema
//used to access/ create something in the db
const ExpenseRecord = mongoose.model('ExpenseRecord', ExpenseSchema);

//EXPORT YOUR MODEL TO USE IT AND CONNECT TO OTHER FILES AND REQUIRE IT
module.exports = ExpenseRecord;