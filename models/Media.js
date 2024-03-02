const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
    title: { type: String },
    images: { data: Buffer, contentType: String },
    subtitle: { type: String },
    publicationDate: { type: Date },
    link:{type:String},
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
