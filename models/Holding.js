const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
  name: { type: String },
  images: { data: Buffer, contentType: String }
});

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;
