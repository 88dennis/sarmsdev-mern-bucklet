const mongoose = require('mongoose');

//SCHEMA
const Schema = mongoose.Schema;
const IncomeSchema = new Schema({
    id: String,
    incomeText: String,
    incomeAmount: Number,
});

//MODEL
//register your schema
//used to access/ create something in the db
const IncomeRecord = mongoose.model('IncomeRecord', IncomeSchema);

//EXPORT YOUR MODEL TO USE IT AND CONNECT TO OTHER FILES AND REQUIRE IT
module.exports = IncomeRecord;