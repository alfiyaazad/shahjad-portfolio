const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
  name: { type: String },
  images: { data: Buffer, contentType: String }
});

const Investment = mongoose.model("Investment", investmentSchema);

module.exports = Investment;
