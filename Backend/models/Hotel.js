import mongoose from "mongoose";  //mongoose is a library, which is an Object Data Modeling (ODM) library for MongoDB and provides an easy way to interact with the database.

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  photo: {
    type: [String],
    },
  title: {
      type: String,
      require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
  featured: {
    type: Boolean,
    require: false,
  }
});

export default mongoose.model("Hotel",HotelSchema)  //creates a MongoDB collection called "hotels" based on the defined schema.