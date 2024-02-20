// REQUIREMENT
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const multer = require("multer");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const https = require("https");
const fs = require("fs");
const crypto = require("crypto");



// Generate a secure random string of bytes
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const { ContentModel } = require("./models/db");
const { accessModel } = require("./models/db");
const { CLOSING } = require("ws");
const { log } = require("console");

// DECLARATION

const app = express();
const port = process.env.PORT;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));

app.use((req, res, next) => {
  // Set Cache-Control headers to prevent caching
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});
app.use(
  session({
    secret: process.env.SESSION_SECRET || generateSecretKey(),
    resave: false,
    saveUninitialized: true,
  })
);

const checkSession = (req, res, next) => {
  if (req.session.user) {
    // User has an active session, redirect to admin dashboard
    return res.redirect("/admin/dashboard");
  }
  next(); // Proceed to the next middleware
};

const checkAdminSession = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect("/admin");
  }
};

mongoose.connect(process.env.DB_CONNECTION_STRING, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

// SETUP

app.set("view engine", "ejs");

// GET ROUTE

app.get("/", async (req, res) => {
  try {
    const mainData = await ContentModel.find();

    res.render("index", { mainData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/admin", checkSession, async (req, res) => {
  res.render("admin_login");
});

app.get("/admin/dashboard", checkAdminSession, async (req, res) => {
  if (req.session.user) {
    try {
      const mainData = await ContentModel.find();

      res.render("admin_dashboard", { mainData });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/admin");
  }
});

app.post(
  "/edit/content",
  upload.fields([
    { name: "signature", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "m-2-i-1-logo", maxCount: 1 },
    { name: "m-2-i-2-logo", maxCount: 1 },
    { name: "m-2-i-3-logo", maxCount: 1 },
    { name: "m-2-i-4-logo", maxCount: 1 },
    { name: "m-2-i-5-logo", maxCount: 1 },
    { name: "m-2-i-6-logo", maxCount: 1 },

    { name: "m-3-i-1-logo", maxCount: 1 },
    { name: "m-3-i-2-logo", maxCount: 1 },
    { name: "m-3-i-3-logo", maxCount: 1 },
    { name: "m-3-i-4-logo", maxCount: 1 },
    { name: "m-3-i-5-logo", maxCount: 1 },
    { name: "m-3-i-6-logo", maxCount: 1 },

    { name: "m-4-i-1-logo", maxCount: 1 },
    { name: "m-4-i-2-logo", maxCount: 1 },
    { name: "m-4-i-3-logo", maxCount: 1 },
    { name: "m-4-i-4-logo", maxCount: 1 },
    { name: "m-4-i-5-logo", maxCount: 1 },
    { name: "m-4-i-6-logo", maxCount: 1 },

    { name: "m-5-i-1-image", maxCount: 1 },
    { name: "m-5-i-2-image", maxCount: 1 },
    { name: "m-5-i-3-image", maxCount: 1 },
    { name: "m-5-i-4-image", maxCount: 1 },
    { name: "m-5-i-5-image", maxCount: 1 },
    { name: "m-5-i-6-image", maxCount: 1 },

    { name: "m-6-i-1-image", maxCount: 1 },
    { name: "m-6-i-2-image", maxCount: 1 },
    { name: "m-6-i-3-image", maxCount: 1 },
    { name: "m-6-i-4-image", maxCount: 1 },
    { name: "m-6-i-5-image", maxCount: 1 },
    { name: "m-6-i-6-image", maxCount: 1 },

    { name: "goal-icon-1", maxCount: 1 },
    { name: "goal-icon-2", maxCount: 1 },
    { name: "goal-icon-3", maxCount: 1 },
    { name: "goal-icon-4", maxCount: 1 },
    { name: "goal-icon-5", maxCount: 1 },
    { name: "goal-icon-6", maxCount: 1 },

    { name: "book-image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const updatedFields = req.body;
      const signatureFile = req.files["signature"]
        ? req.files["signature"][0]
        : null;
      const photoFile = req.files["photo"] ? req.files["photo"][0] : null;
      const brand1LogoFile = req.files["m-2-i-1-logo"]
        ? req.files["m-2-i-1-logo"][0]
        : null;
      const brand2LogoFile = req.files["m-2-i-2-logo"]
        ? req.files["m-2-i-2-logo"][0]
        : null;
      const brand3LogoFile = req.files["m-2-i-3-logo"]
        ? req.files["m-2-i-3-logo"][0]
        : null;
      const brand4LogoFile = req.files["m-2-i-4-logo"]
        ? req.files["m-2-i-4-logo"][0]
        : null;
      const brand5LogoFile = req.files["m-2-i-5-logo"]
        ? req.files["m-2-i-5-logo"][0]
        : null;
      const brand6LogoFile = req.files["m-2-i-6-logo"]
        ? req.files["m-2-i-6-logo"][0]
        : null;

      const invest1LogoFile = req.files["m-3-i-1-logo"]
        ? req.files["m-3-i-1-logo"][0]
        : null;
      const invest2LogoFile = req.files["m-3-i-2-logo"]
        ? req.files["m-3-i-2-logo"][0]
        : null;
      const invest3LogoFile = req.files["m-3-i-3-logo"]
        ? req.files["m-3-i-3-logo"][0]
        : null;
      const invest4LogoFile = req.files["m-3-i-4-logo"]
        ? req.files["m-3-i-4-logo"][0]
        : null;
      const invest5LogoFile = req.files["m-3-i-5-logo"]
        ? req.files["m-3-i-5-logo"][0]
        : null;
      const invest6LogoFile = req.files["m-3-i-6-logo"]
        ? req.files["m-3-i-6-logo"][0]
        : null;

      const hold1LogoFile = req.files["m-4-i-1-logo"]
        ? req.files["m-4-i-1-logo"][0]
        : null;
      const hold2LogoFile = req.files["m-4-i-2-logo"]
        ? req.files["m-4-i-2-logo"][0]
        : null;
      const hold3LogoFile = req.files["m-4-i-3-logo"]
        ? req.files["m-4-i-3-logo"][0]
        : null;
      const hold4LogoFile = req.files["m-4-i-4-logo"]
        ? req.files["m-4-i-4-logo"][0]
        : null;
      const hold5LogoFile = req.files["m-4-i-5-logo"]
        ? req.files["m-4-i-5-logo"][0]
        : null;
      const hold6LogoFile = req.files["m-4-i-6-logo"]
        ? req.files["m-4-i-6-logo"][0]
        : null;

      const goal1IconFile = req.files["goal-icon-1"]
        ? req.files["goal-icon-1"][0]
        : null;
      const goal2IconFile = req.files["goal-icon-2"]
        ? req.files["goal-icon-2"][0]
        : null;
      const goal3IconFile = req.files["goal-icon-3"]
        ? req.files["goal-icon-3"][0]
        : null;
      const goal4IconFile = req.files["goal-icon-4"]
        ? req.files["goal-icon-4"][0]
        : null;
      const goal5IconFile = req.files["goal-icon-5"]
        ? req.files["goal-icon-5"][0]
        : null;
      const goal6IconFile = req.files["goal-icon-6"]
        ? req.files["goal-icon-6"][0]
        : null;
      const bookImageFile = req.files["book-image"]
        ? req.files["book-image"][0]
        : null;

      const media1ImageFile = req.files["m-5-i-1-image"]
        ? req.files["m-5-i-1-image"][0]
        : null;
      const media2ImageFile = req.files["m-5-i-2-image"]
        ? req.files["m-5-i-2-image"][0]
        : null;
      const media3ImageFile = req.files["m-5-i-3-image"]
        ? req.files["m-5-i-3-image"][0]
        : null;
      const media4ImageFile = req.files["m-5-i-4-image"]
        ? req.files["m-5-i-4-image"][0]
        : null;
      const media5ImageFile = req.files["m-5-i-5-image"]
        ? req.files["m-5-i-5-image"][0]
        : null;
      const media6ImageFile = req.files["m-5-i-6-image"]
        ? req.files["m-5-i-6-image"][0]
        : null;

      const event1ImageFile = req.files["m-6-i-1-image"]
        ? req.files["m-6-i-1-image"][0]
        : null;
      const event2ImageFile = req.files["m-6-i-2-image"]
        ? req.files["m-6-i-2-image"][0]
        : null;
      const event3ImageFile = req.files["m-6-i-3-image"]
        ? req.files["m-6-i-3-image"][0]
        : null;
      const event4ImageFile = req.files["m-6-i-4-image"]
        ? req.files["m-6-i-4-image"][0]
        : null;
      const event5ImageFile = req.files["m-6-i-5-image"]
        ? req.files["m-6-i-5-image"][0]
        : null;
      const event6ImageFile = req.files["m-6-i-6-image"]
        ? req.files["m-6-i-6-image"][0]
        : null;

      // Update the only document in the collection
      const existingItem = await ContentModel.findOne();

      if (!existingItem) {
        return res.status(404).json({ message: "Item not found" });
      }

      // Update text fields
      Object.assign(existingItem, updatedFields);

      // Update signature field if file uploaded
      if (signatureFile) {
        existingItem.signature.data = signatureFile.buffer;
        existingItem.signature.contentType = signatureFile.mimetype;
        existingItem.signatureFile = signatureFile.originalname;
      }

      // Update photo field if file uploaded
      if (photoFile) {
        existingItem.photo.data = photoFile.buffer;
        existingItem.photo.contentType = photoFile.mimetype;
        existingItem.photoFile = photoFile.originalname;
      }

      if (brand1LogoFile) {
        existingItem.menu.brands[0].logo.data = brand1LogoFile.buffer;
        existingItem.menu.brands[0].logo.contentType = brand1LogoFile.mimetype;
        existingItem.menu.brands[0].logoFile = brand1LogoFile.originalname;
      }
      if (brand2LogoFile) {
        existingItem.menu.brands[1].logo.data = brand2LogoFile.buffer;
        existingItem.menu.brands[1].logo.contentType = brand2LogoFile.mimetype;
        existingItem.menu.brands[1].logoFile = brand2LogoFile.originalname;
      }
      if (brand3LogoFile) {
        existingItem.menu.brands[2].logo.data = brand3LogoFile.buffer;
        existingItem.menu.brands[2].logo.contentType = brand3LogoFile.mimetype;
        existingItem.menu.brands[2].logoFile = brand3LogoFile.originalname;
      }
      if (brand4LogoFile) {
        existingItem.menu.brands[3].logo.data = brand4LogoFile.buffer;
        existingItem.menu.brands[3].logo.contentType = brand4LogoFile.mimetype;
        existingItem.menu.brands[3].logoFile = brand4LogoFile.originalname;
      }
      if (brand5LogoFile) {
        existingItem.menu.brands[4].logo.data = brand5LogoFile.buffer;
        existingItem.menu.brands[4].logo.contentType = brand5LogoFile.mimetype;
        existingItem.menu.brands[4].logoFile = brand5LogoFile.originalname;
      }
      if (brand6LogoFile) {
        existingItem.menu.brands[5].logo.data = brand6LogoFile.buffer;
        existingItem.menu.brands[5].logo.contentType = brand6LogoFile.mimetype;
        existingItem.menu.brands[5].logoFile = brand6LogoFile.originalname;
      }

      if (invest1LogoFile) {
        existingItem.menu.investments[0].logo.data = invest1LogoFile.buffer;
        existingItem.menu.investments[0].logo.contentType =
          invest1LogoFile.mimetype;
        existingItem.menu.investments[0].logoFile =
          invest1LogoFile.originalname;
      }
      if (invest2LogoFile) {
        existingItem.menu.investments[1].logo.data = invest2LogoFile.buffer;
        existingItem.menu.investments[1].logo.contentType =
          invest2LogoFile.mimetype;
        existingItem.menu.investments[1].logoFile =
          invest2LogoFile.originalname;
      }
      if (invest3LogoFile) {
        existingItem.menu.investments[2].logo.data = invest3LogoFile.buffer;
        existingItem.menu.investments[2].logo.contentType =
          invest3LogoFile.mimetype;
        existingItem.menu.investments[2].logoFile =
          invest3LogoFile.originalname;
      }
      if (invest4LogoFile) {
        existingItem.menu.investments[3].logo.data = invest4LogoFile.buffer;
        existingItem.menu.investments[3].logo.contentType =
          invest4LogoFile.mimetype;
        existingItem.menu.investments[3].logoFile =
          invest4LogoFile.originalname;
      }
      if (invest5LogoFile) {
        existingItem.menu.investments[4].logo.data = invest5LogoFile.buffer;
        existingItem.menu.investments[4].logo.contentType =
          invest5LogoFile.mimetype;
        existingItem.menu.investments[4].logoFile =
          invest5LogoFile.originalname;
      }
      if (invest6LogoFile) {
        existingItem.menu.investments[5].logo.data = invest6LogoFile.buffer;
        existingItem.menu.investments[5].logo.contentType =
          invest6LogoFile.mimetype;
        existingItem.menu.investments[5].logoFile =
          invest6LogoFile.originalname;
      }

      if (hold1LogoFile) {
        existingItem.menu.holdings[0].logo.data = hold1LogoFile.buffer;
        existingItem.menu.holdings[0].logo.contentType = hold1LogoFile.mimetype;
        existingItem.menu.holdings[0].logoFile = hold1LogoFile.originalname;
      }
      if (hold2LogoFile) {
        existingItem.menu.holdings[1].logo.data = hold2LogoFile.buffer;
        existingItem.menu.holdings[1].logo.contentType = hold2LogoFile.mimetype;
        existingItem.menu.holdings[1].logoFile = hold2LogoFile.originalname;
      }
      if (hold3LogoFile) {
        existingItem.menu.holdings[2].logo.data = hold3LogoFile.buffer;
        existingItem.menu.holdings[2].logo.contentType = hold3LogoFile.mimetype;
        existingItem.menu.holdings[2].logoFile = hold3LogoFile.originalname;
      }
      if (hold4LogoFile) {
        existingItem.menu.holdings[3].logo.data = hold4LogoFile.buffer;
        existingItem.menu.holdings[3].logo.contentType = hold4LogoFile.mimetype;
        existingItem.menu.holdings[3].logoFile = hold4LogoFile.originalname;
      }
      if (hold5LogoFile) {
        existingItem.menu.holdings[4].logo.data = hold5LogoFile.buffer;
        existingItem.menu.holdings[4].logo.contentType = hold5LogoFile.mimetype;
        existingItem.menu.holdings[4].logoFile = hold5LogoFile.originalname;
      }
      if (hold6LogoFile) {
        existingItem.menu.holdings[5].logo.data = hold6LogoFile.buffer;
        existingItem.menu.holdings[5].logo.contentType = hold6LogoFile.mimetype;
        existingItem.menu.holdings[5].logoFile = hold6LogoFile.originalname;
      }

      if (media1ImageFile) {
        existingItem.menu.media[0].image.data = media1ImageFile.buffer;
        existingItem.menu.media[0].image.contentType = media1ImageFile.mimetype;
        existingItem.menu.media[0].imageFile = media1ImageFile.originalname;
      }
      if (media2ImageFile) {
        existingItem.menu.media[1].image.data = media2ImageFile.buffer;
        existingItem.menu.media[1].image.contentType = media2ImageFile.mimetype;
        existingItem.menu.media[1].imageFile = media2ImageFile.originalname;
      }
      if (media3ImageFile) {
        existingItem.menu.media[2].image.data = media3ImageFile.buffer;
        existingItem.menu.media[2].image.contentType = media3ImageFile.mimetype;
        existingItem.menu.media[2].imageFile = media3ImageFile.originalname;
      }
      if (media4ImageFile) {
        existingItem.menu.media[3].image.data = media4ImageFile.buffer;
        existingItem.menu.media[3].image.contentType = media4ImageFile.mimetype;
        existingItem.menu.media[3].imageFile = media4ImageFile.originalname;
      }
      if (media5ImageFile) {
        existingItem.menu.media[4].image.data = media5ImageFile.buffer;
        existingItem.menu.media[4].image.contentType = media5ImageFile.mimetype;
        existingItem.menu.media[4].imageFile = media5ImageFile.originalname;
      }
      if (media6ImageFile) {
        existingItem.menu.media[5].image.data = media6ImageFile.buffer;
        existingItem.menu.media[5].image.contentType = media6ImageFile.mimetype;
        existingItem.menu.media[5].imageFile = media6ImageFile.originalname;
      }

      if (event1ImageFile) {
        existingItem.menu.events[0].image.data = event1ImageFile.buffer;
        existingItem.menu.events[0].image.contentType =
          event1ImageFile.mimetype;
        existingItem.menu.events[0].imageFile = event1ImageFile.originalname;
      }
      if (event2ImageFile) {
        existingItem.menu.events[1].image.data = event2ImageFile.buffer;
        existingItem.menu.events[1].image.contentType =
          event2ImageFile.mimetype;
        existingItem.menu.events[1].imageFile = event2ImageFile.originalname;
      }
      if (event3ImageFile) {
        existingItem.menu.events[2].image.data = event3ImageFile.buffer;
        existingItem.menu.events[2].image.contentType =
          event3ImageFile.mimetype;
        existingItem.menu.events[2].imageFile = event3ImageFile.originalname;
      }
      if (event4ImageFile) {
        existingItem.menu.events[3].image.data = event4ImageFile.buffer;
        existingItem.menu.events[3].image.contentType =
          event4ImageFile.mimetype;
        existingItem.menu.events[3].imageFile = event4ImageFile.originalname;
      }
      if (event5ImageFile) {
        existingItem.menu.events[4].image.data = event5ImageFile.buffer;
        existingItem.menu.events[4].image.contentType =
          event5ImageFile.mimetype;
        existingItem.menu.events[4].imageFile = event5ImageFile.originalname;
      }
      if (event6ImageFile) {
        existingItem.menu.events[5].image.data = event6ImageFile.buffer;
        existingItem.menu.events[5].image.contentType =
          event6ImageFile.mimetype;
        existingItem.menu.events[5].imageFile = event6ImageFile.originalname;
      }

      if (goal1IconFile) {
        existingItem.goals[0].icon.data = goal1IconFile.buffer;
        existingItem.goals[0].icon.contentType = goal1IconFile.mimetype;
        existingItem.goals[0].iconFile = goal1IconFile.originalname;
      }
      if (goal2IconFile) {
        existingItem.goals[1].icon.data = goal2IconFile.buffer;
        existingItem.goals[1].icon.contentType = goal2IconFile.mimetype;
        existingItem.goals[1].iconFile = goal2IconFile.originalname;
      }
      if (goal3IconFile) {
        existingItem.goals[2].icon.data = goal3IconFile.buffer;
        existingItem.goals[2].icon.contentType = goal3IconFile.mimetype;
        existingItem.goals[2].iconFile = goal3IconFile.originalname;
      }
      if (goal4IconFile) {
        existingItem.goals[3].icon.data = goal4IconFile.buffer;
        existingItem.goals[3].icon.contentType = goal4IconFile.mimetype;
        existingItem.goals[3].iconFile = goal4IconFile.originalname;
      }
      if (goal5IconFile) {
        existingItem.goals[4].icon.data = goal5IconFile.buffer;
        existingItem.goals[4].icon.contentType = goal5IconFile.mimetype;
        existingItem.goals[4].iconFile = goal5IconFile.originalname;
      }
      if (goal6IconFile) {
        existingItem.goals[5].icon.data = goal6IconFile.buffer;
        existingItem.goals[5].icon.contentType = goal6IconFile.mimetype;
        existingItem.goals[5].iconFile = goal6IconFile.originalname;
      }

      if (bookImageFile) {
        existingItem.book.image.data = bookImageFile.buffer;
        existingItem.book.image.contentType = bookImageFile.mimetype;
        existingItem.book.imageFile = bookImageFile.originalname;
      }

      existingItem.menu.about.subContent = req.body["menu.about.subContent"];
      existingItem.menu.about.mainContent = req.body["menu.about.mainContent"];

      existingItem.menu.brands[0].name = req.body["menu.brands[0].name"];
      existingItem.menu.brands[1].name = req.body["menu.brands[1].name"];
      existingItem.menu.brands[2].name = req.body["menu.brands[2].name"];
      existingItem.menu.brands[3].name = req.body["menu.brands[3].name"];
      existingItem.menu.brands[4].name = req.body["menu.brands[4].name"];
      existingItem.menu.brands[5].name = req.body["menu.brands[5].name"];
      existingItem.menu.brands[0].socialMedia.insta =
        req.body["menu.brands[0].socialMedia.insta"];
      existingItem.menu.brands[1].socialMedia.insta =
        req.body["menu.brands[1].socialMedia.insta"];
      existingItem.menu.brands[2].socialMedia.insta =
        req.body["menu.brands[2].socialMedia.insta"];
      existingItem.menu.brands[3].socialMedia.insta =
        req.body["menu.brands[3].socialMedia.insta"];
      existingItem.menu.brands[4].socialMedia.insta =
        req.body["menu.brands[4].socialMedia.insta"];
      existingItem.menu.brands[5].socialMedia.insta =
        req.body["menu.brands[5].socialMedia.insta"];
      existingItem.menu.brands[0].socialMedia.fb =
        req.body["menu.brands[0].socialMedia.fb"];
      existingItem.menu.brands[1].socialMedia.fb =
        req.body["menu.brands[1].socialMedia.fb"];
      existingItem.menu.brands[2].socialMedia.fb =
        req.body["menu.brands[2].socialMedia.fb"];
      existingItem.menu.brands[3].socialMedia.fb =
        req.body["menu.brands[3].socialMedia.fb"];
      existingItem.menu.brands[4].socialMedia.fb =
        req.body["menu.brands[4].socialMedia.fb"];
      existingItem.menu.brands[5].socialMedia.fb =
        req.body["menu.brands[5].socialMedia.fb"];
      existingItem.menu.brands[0].socialMedia.twitter =
        req.body["menu.brands[0].socialMedia.twitter"];
      existingItem.menu.brands[1].socialMedia.twitter =
        req.body["menu.brands[1].socialMedia.twitter"];
      existingItem.menu.brands[2].socialMedia.twitter =
        req.body["menu.brands[2].socialMedia.twitter"];
      existingItem.menu.brands[3].socialMedia.twitter =
        req.body["menu.brands[3].socialMedia.twitter"];
      existingItem.menu.brands[4].socialMedia.twitter =
        req.body["menu.brands[4].socialMedia.twitter"];
      existingItem.menu.brands[5].socialMedia.twitter =
        req.body["menu.brands[5].socialMedia.twitter"];
      existingItem.menu.brands[0].socialMedia.linkedin =
        req.body["menu.brands[0].socialMedia.linkedin"];
      existingItem.menu.brands[1].socialMedia.linkedin =
        req.body["menu.brands[1].socialMedia.linkedin"];
      existingItem.menu.brands[2].socialMedia.linkedin =
        req.body["menu.brands[2].socialMedia.linkedin"];
      existingItem.menu.brands[3].socialMedia.linkedin =
        req.body["menu.brands[3].socialMedia.linkedin"];
      existingItem.menu.brands[4].socialMedia.linkedin =
        req.body["menu.brands[4].socialMedia.linkedin"];
      existingItem.menu.brands[5].socialMedia.linkedin =
        req.body["menu.brands[5].socialMedia.linkedin"];

      existingItem.menu.brands[0].subContent =
        req.body["menu.brands[0].subContent"];
      existingItem.menu.brands[1].subContent =
        req.body["menu.brands[1].subContent"];
      existingItem.menu.brands[2].subContent =
        req.body["menu.brands[2].subContent"];
      existingItem.menu.brands[3].subContent =
        req.body["menu.brands[3].subContent"];
      existingItem.menu.brands[4].subContent =
        req.body["menu.brands[4].subContent"];
      existingItem.menu.brands[5].subContent =
        req.body["menu.brands[5].subContent"];

      existingItem.menu.brands[0].mainContent =
        req.body["menu.brands[0].mainContent"];
      existingItem.menu.brands[1].mainContent =
        req.body["menu.brands[1].mainContent"];
      existingItem.menu.brands[2].mainContent =
        req.body["menu.brands[2].mainContent"];
      existingItem.menu.brands[3].mainContent =
        req.body["menu.brands[3].mainContent"];
      existingItem.menu.brands[4].mainContent =
        req.body["menu.brands[4].mainContent"];
      existingItem.menu.brands[5].mainContent =
        req.body["menu.brands[5].mainContent"];

      existingItem.menu.investments[0].name =
        req.body["menu.investments[0].name"];
      existingItem.menu.investments[1].name =
        req.body["menu.investments[1].name"];
      existingItem.menu.investments[2].name =
        req.body["menu.investments[2].name"];
      existingItem.menu.investments[3].name =
        req.body["menu.investments[3].name"];
      existingItem.menu.investments[4].name =
        req.body["menu.investments[4].name"];
      existingItem.menu.investments[5].name =
        req.body["menu.investments[5].name"];
      existingItem.menu.investments[0].socialMedia.insta =
        req.body["menu.investments[0].socialMedia.insta"];
      existingItem.menu.investments[1].socialMedia.insta =
        req.body["menu.investments[1].socialMedia.insta"];
      existingItem.menu.investments[2].socialMedia.insta =
        req.body["menu.investments[2].socialMedia.insta"];
      existingItem.menu.investments[3].socialMedia.insta =
        req.body["menu.investments[3].socialMedia.insta"];
      existingItem.menu.investments[4].socialMedia.insta =
        req.body["menu.investments[4].socialMedia.insta"];
      existingItem.menu.investments[5].socialMedia.insta =
        req.body["menu.investments[5].socialMedia.insta"];
      existingItem.menu.investments[0].socialMedia.fb =
        req.body["menu.investments[0].socialMedia.fb"];
      existingItem.menu.investments[1].socialMedia.fb =
        req.body["menu.investments[1].socialMedia.fb"];
      existingItem.menu.investments[2].socialMedia.fb =
        req.body["menu.investments[2].socialMedia.fb"];
      existingItem.menu.investments[3].socialMedia.fb =
        req.body["menu.investments[3].socialMedia.fb"];
      existingItem.menu.investments[4].socialMedia.fb =
        req.body["menu.investments[4].socialMedia.fb"];
      existingItem.menu.investments[5].socialMedia.fb =
        req.body["menu.investments[5].socialMedia.fb"];
      existingItem.menu.investments[0].socialMedia.twitter =
        req.body["menu.investments[0].socialMedia.twitter"];
      existingItem.menu.investments[1].socialMedia.twitter =
        req.body["menu.investments[1].socialMedia.twitter"];
      existingItem.menu.investments[2].socialMedia.twitter =
        req.body["menu.investments[2].socialMedia.twitter"];
      existingItem.menu.investments[3].socialMedia.twitter =
        req.body["menu.investments[3].socialMedia.twitter"];
      existingItem.menu.investments[4].socialMedia.twitter =
        req.body["menu.investments[4].socialMedia.twitter"];
      existingItem.menu.investments[5].socialMedia.twitter =
        req.body["menu.investments[5].socialMedia.twitter"];
      existingItem.menu.investments[0].socialMedia.linkedin =
        req.body["menu.investments[0].socialMedia.linkedin"];
      existingItem.menu.investments[1].socialMedia.linkedin =
        req.body["menu.investments[1].socialMedia.linkedin"];
      existingItem.menu.investments[2].socialMedia.linkedin =
        req.body["menu.investments[2].socialMedia.linkedin"];
      existingItem.menu.investments[3].socialMedia.linkedin =
        req.body["menu.investments[3].socialMedia.linkedin"];
      existingItem.menu.investments[4].socialMedia.linkedin =
        req.body["menu.investments[4].socialMedia.linkedin"];
      existingItem.menu.investments[5].socialMedia.linkedin =
        req.body["menu.investments[5].socialMedia.linkedin"];

      existingItem.menu.investments[0].subContent =
        req.body["menu.investments[0].subContent"];
      existingItem.menu.investments[1].subContent =
        req.body["menu.investments[1].subContent"];
      existingItem.menu.investments[2].subContent =
        req.body["menu.investments[2].subContent"];
      existingItem.menu.investments[3].subContent =
        req.body["menu.investments[3].subContent"];
      existingItem.menu.investments[4].subContent =
        req.body["menu.investments[4].subContent"];
      existingItem.menu.investments[5].subContent =
        req.body["menu.investments[5].subContent"];

      existingItem.menu.investments[0].mainContent =
        req.body["menu.investments[0].mainContent"];
      existingItem.menu.investments[1].mainContent =
        req.body["menu.investments[1].mainContent"];
      existingItem.menu.investments[2].mainContent =
        req.body["menu.investments[2].mainContent"];
      existingItem.menu.investments[3].mainContent =
        req.body["menu.investments[3].mainContent"];
      existingItem.menu.investments[4].mainContent =
        req.body["menu.investments[4].mainContent"];
      existingItem.menu.investments[5].mainContent =
        req.body["menu.investments[5].mainContent"];

      existingItem.menu.holdings[0].name = req.body["menu.holdings[0].name"];
      existingItem.menu.holdings[1].name = req.body["menu.holdings[1].name"];
      existingItem.menu.holdings[2].name = req.body["menu.holdings[2].name"];
      existingItem.menu.holdings[3].name = req.body["menu.holdings[3].name"];
      existingItem.menu.holdings[4].name = req.body["menu.holdings[4].name"];
      existingItem.menu.holdings[5].name = req.body["menu.holdings[5].name"];
      existingItem.menu.holdings[0].socialMedia.insta =
        req.body["menu.holdings[0].socialMedia.insta"];
      existingItem.menu.holdings[1].socialMedia.insta =
        req.body["menu.holdings[1].socialMedia.insta"];
      existingItem.menu.holdings[2].socialMedia.insta =
        req.body["menu.holdings[2].socialMedia.insta"];
      existingItem.menu.holdings[3].socialMedia.insta =
        req.body["menu.holdings[3].socialMedia.insta"];
      existingItem.menu.holdings[4].socialMedia.insta =
        req.body["menu.holdings[4].socialMedia.insta"];
      existingItem.menu.holdings[5].socialMedia.insta =
        req.body["menu.holdings[5].socialMedia.insta"];
      existingItem.menu.holdings[0].socialMedia.fb =
        req.body["menu.holdings[0].socialMedia.fb"];
      existingItem.menu.holdings[1].socialMedia.fb =
        req.body["menu.holdings[1].socialMedia.fb"];
      existingItem.menu.holdings[2].socialMedia.fb =
        req.body["menu.holdings[2].socialMedia.fb"];
      existingItem.menu.holdings[3].socialMedia.fb =
        req.body["menu.holdings[3].socialMedia.fb"];
      existingItem.menu.holdings[4].socialMedia.fb =
        req.body["menu.holdings[4].socialMedia.fb"];
      existingItem.menu.holdings[5].socialMedia.fb =
        req.body["menu.holdings[5].socialMedia.fb"];
      existingItem.menu.holdings[0].socialMedia.twitter =
        req.body["menu.holdings[0].socialMedia.twitter"];
      existingItem.menu.holdings[1].socialMedia.twitter =
        req.body["menu.holdings[1].socialMedia.twitter"];
      existingItem.menu.holdings[2].socialMedia.twitter =
        req.body["menu.holdings[2].socialMedia.twitter"];
      existingItem.menu.holdings[3].socialMedia.twitter =
        req.body["menu.holdings[3].socialMedia.twitter"];
      existingItem.menu.holdings[4].socialMedia.twitter =
        req.body["menu.holdings[4].socialMedia.twitter"];
      existingItem.menu.holdings[5].socialMedia.twitter =
        req.body["menu.holdings[5].socialMedia.twitter"];
      existingItem.menu.holdings[0].socialMedia.linkedin =
        req.body["menu.holdings[0].socialMedia.linkedin"];
      existingItem.menu.holdings[1].socialMedia.linkedin =
        req.body["menu.holdings[1].socialMedia.linkedin"];
      existingItem.menu.holdings[2].socialMedia.linkedin =
        req.body["menu.holdings[2].socialMedia.linkedin"];
      existingItem.menu.holdings[3].socialMedia.linkedin =
        req.body["menu.holdings[3].socialMedia.linkedin"];
      existingItem.menu.holdings[4].socialMedia.linkedin =
        req.body["menu.holdings[4].socialMedia.linkedin"];
      existingItem.menu.holdings[5].socialMedia.linkedin =
        req.body["menu.holdings[5].socialMedia.linkedin"];

      existingItem.menu.holdings[0].subContent =
        req.body["menu.holdings[0].subContent"];
      existingItem.menu.holdings[1].subContent =
        req.body["menu.holdings[1].subContent"];
      existingItem.menu.holdings[2].subContent =
        req.body["menu.holdings[2].subContent"];
      existingItem.menu.holdings[3].subContent =
        req.body["menu.holdings[3].subContent"];
      existingItem.menu.holdings[4].subContent =
        req.body["menu.holdings[4].subContent"];
      existingItem.menu.holdings[5].subContent =
        req.body["menu.holdings[5].subContent"];

      existingItem.menu.holdings[0].mainContent =
        req.body["menu.holdings[0].mainContent"];
      existingItem.menu.holdings[1].mainContent =
        req.body["menu.holdings[1].mainContent"];
      existingItem.menu.holdings[2].mainContent =
        req.body["menu.holdings[2].mainContent"];
      existingItem.menu.holdings[3].mainContent =
        req.body["menu.holdings[3].mainContent"];
      existingItem.menu.holdings[4].mainContent =
        req.body["menu.holdings[4].mainContent"];
      existingItem.menu.holdings[5].mainContent =
        req.body["menu.holdings[5].mainContent"];

      existingItem.menu.media[0].mediaLink =
        req.body["menu.media[0].mediaLink"];
      existingItem.menu.media[1].mediaLink =
        req.body["menu.media[1].mediaLink"];
      existingItem.menu.media[2].mediaLink =
        req.body["menu.media[2].mediaLink"];
      existingItem.menu.media[3].mediaLink =
        req.body["menu.media[3].mediaLink"];
      existingItem.menu.media[4].mediaLink =
        req.body["menu.media[4].mediaLink"];
      existingItem.menu.media[5].mediaLink =
        req.body["menu.media[5].mediaLink"];

      existingItem.menu.media[0].overlayContent =
        req.body["menu.media[0].overlayContent"];
      existingItem.menu.media[1].overlayContent =
        req.body["menu.media[1].overlayContent"];
      existingItem.menu.media[2].overlayContent =
        req.body["menu.media[2].overlayContent"];
      existingItem.menu.media[3].overlayContent =
        req.body["menu.media[3].overlayContent"];
      existingItem.menu.media[4].overlayContent =
        req.body["menu.media[4].overlayContent"];
      existingItem.menu.media[5].overlayContent =
        req.body["menu.media[5].overlayContent"];

      existingItem.menu.media[0].mainContent =
        req.body["menu.media[0].mainContent"];
      existingItem.menu.media[1].mainContent =
        req.body["menu.media[1].mainContent"];
      existingItem.menu.media[2].mainContent =
        req.body["menu.media[2].mainContent"];
      existingItem.menu.media[3].mainContent =
        req.body["menu.media[3].mainContent"];
      existingItem.menu.media[4].mainContent =
        req.body["menu.media[4].mainContent"];
      existingItem.menu.media[5].mainContent =
        req.body["menu.media[5].mainContent"];

      existingItem.menu.events[0].eventLink =
        req.body["menu.events[0].eventLink"];
      existingItem.menu.events[1].eventLink =
        req.body["menu.events[1].eventLink"];
      existingItem.menu.events[2].eventLink =
        req.body["menu.events[2].eventLink"];
      existingItem.menu.events[3].eventLink =
        req.body["menu.events[3].eventLink"];
      existingItem.menu.events[4].eventLink =
        req.body["menu.events[4].eventLink"];
      existingItem.menu.events[5].eventLink =
        req.body["menu.events[5].eventLink"];

      existingItem.menu.events[0].overlayContent =
        req.body["menu.events[0].overlayContent"];
      existingItem.menu.events[1].overlayContent =
        req.body["menu.events[1].overlayContent"];
      existingItem.menu.events[2].overlayContent =
        req.body["menu.events[2].overlayContent"];
      existingItem.menu.events[3].overlayContent =
        req.body["menu.events[3].overlayContent"];
      existingItem.menu.events[4].overlayContent =
        req.body["menu.events[4].overlayContent"];
      existingItem.menu.events[5].overlayContent =
        req.body["menu.events[5].overlayContent"];

      existingItem.menu.events[0].mainContent =
        req.body["menu.events[0].mainContent"];
      existingItem.menu.events[1].mainContent =
        req.body["menu.events[1].mainContent"];
      existingItem.menu.events[2].mainContent =
        req.body["menu.events[2].mainContent"];
      existingItem.menu.events[3].mainContent =
        req.body["menu.events[3].mainContent"];
      existingItem.menu.events[4].mainContent =
        req.body["menu.events[4].mainContent"];
      existingItem.menu.events[5].mainContent =
        req.body["menu.events[5].mainContent"];

      existingItem.goals[0].name = req.body["goals[0].name"];
      existingItem.goals[1].name = req.body["goals[1].name"];
      existingItem.goals[2].name = req.body["goals[2].name"];
      existingItem.goals[3].name = req.body["goals[3].name"];
      existingItem.goals[4].name = req.body["goals[4].name"];
      existingItem.goals[5].name = req.body["goals[5].name"];

      existingItem.goals[0].content = req.body["goals[0].content"];
      existingItem.goals[1].content = req.body["goals[1].content"];
      existingItem.goals[2].content = req.body["goals[2].content"];
      existingItem.goals[3].content = req.body["goals[3].content"];
      existingItem.goals[4].content = req.body["goals[4].content"];
      existingItem.goals[5].content = req.body["goals[5].content"];

      existingItem.book.name = req.body["book.name"];
      existingItem.book.quote = req.body["book.quote"];
      existingItem.book.page = req.body["book.page"];
      existingItem.book.link = req.body["book.link"];

      // Save the updated document
      await existingItem.save();

      res.redirect("/admin/dashboard"); // Redirect to the desired page after successful update
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

app.post("/admin/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await accessModel.findOne({ username: userName });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, user authenticated
      req.session.user = user; // Save user information in session
      return res.redirect("/admin/dashboard");
    } else {
      // Passwords don't match
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/admin/logout", (req, res) => {
  // Destroy the user's session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Failed to logout" });
    }

    res.redirect("/admin");
  });
});

// PORT LISTENING

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
