const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String },
  images: { data: Buffer, contentType: String },
  subtitle: { type: String },
    publicationDate: { type: Date },
  link:{type:String},
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
