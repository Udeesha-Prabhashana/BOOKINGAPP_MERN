import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    maxPeople: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      require: true,
        },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date]} }],
  },
  { timestamps: true } //create time, update time and save
);

export default mongoose.model("Room", RoomSchema);
