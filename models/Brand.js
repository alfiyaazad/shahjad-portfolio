const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: { type: String },
  images: { data: Buffer, contentType: String }
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
