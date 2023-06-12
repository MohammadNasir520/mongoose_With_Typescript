import express from "express";
import { Schema, model, connect } from "mongoose";
import cors from "cors";
import { Application, Request, Response } from "express-serve-static-core";
import { NextFunction } from "connect";

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("mongoose milestone server is running ");
  // inserting a test data into mongodb

  /*
step:1 interface
step2: Schema
step3: Model
step4: Database query

*/

  // creating interface

  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dataOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // creating schema using interface
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dataOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "778",
      role: "student",
      password: "jhakanaka",
      name: {
        firstName: "mohammad",
        middleName: "nasir",
        lastName: "uddin",
      },

      gender: "male",
      email: "abc@gmail.coom",
      contactNo: "o1777777777",
      emergencyContact: "0188888",
      presentAddress: "tarash",
      permanentAddress: "usa",
    });
    await user.save();
    console.log(user);
  };
  createUserToDB();
});

export default app;
