import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["member", "trainer", "admin"],
      default: "member",
    },

    age: Number,
    gender: String,
    height: Number,
    weight: Number,

    goal: {
      type: String,
      enum: [
        "Weight Loss",
        "Muscle Gain",
        "Maintain Weight",
        "General Fitness",
      ],
    },

    activityLevel: {
      type: String,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
      ],
    },

    dietPreference: {
      type: String,
      enum: [
        "Veg",
        "Non-Veg",
        "Vegan",
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.User ||
  mongoose.model(
    "User",
    UserSchema
  );