const mongoose = require("mongoose");

// SUB SCHEMA

const socialMediaSchema = new mongoose.Schema({
  insta: String,
  fb: String,
  twitter: String,
  linkedin: String,
});

const brandSchema = new mongoose.Schema({
  name: String,
  logo: { data: Buffer, contentType: String },
  subContent: String,
  mainContent: String,
  socialMedia: socialMediaSchema,
  logoFile: String,
});

const investmentSchema = new mongoose.Schema({
  name: String,
  logo: { data: Buffer, contentType: String },
  subContent: String,
  mainContent: String,
  socialMedia: socialMediaSchema,
});

const holdingSchema = new mongoose.Schema({
  name: String,
  logo: { data: Buffer, contentType: String },
  subContent: String,
  mainContent: String,
  socialMedia: socialMediaSchema,
});

const mediaSchema = new mongoose.Schema({
  image: { data: Buffer, contentType: String },
  overlayContent: String,
  mainContent: String,
  mediaLink: String,
  imageFile: String,
});

const eventSchema = new mongoose.Schema({
  image: { data: Buffer, contentType: String },
  overlayContent: String,
  mainContent: String,
  eventLink: String,
  imageFile: String,
});

const goalSchema = new mongoose.Schema({
  name: String,
  icon: { data: Buffer, contentType: String },
  content: String,
  iconFile: String,
});

// MAIN SCHEMA

const contentSchema = new mongoose.Schema(
  {
    signature: { data: Buffer, contentType: String },
    signatureFile: String,
    photo: { data: Buffer, contentType: String },
    photoFile: String,
    quote: String,
    author: String,
    menuItems: [String],
    menu: {
      about: {
        subContent: String,
        mainContent: String,
      },
      brands: [brandSchema],
      investments: [investmentSchema],
      holdings: [holdingSchema],
      media: [mediaSchema],
      events: [eventSchema],
    },
    goals: [goalSchema],
    email: String,
    book: {
      name: String,
      quote: String,
      page: String,
      link: String,
      image: { data: Buffer, contentType: String },
      imageFile: String,
    },
  },
  { collection: "main" }
);

const accessSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "access" }
);

// MODEL CREATION

const ContentModel = mongoose.model("Content", contentSchema);
const accessModel = mongoose.model("Access", accessSchema);

// MODEL EXPORTING

module.exports = {
  ContentModel,
  accessModel,
};
