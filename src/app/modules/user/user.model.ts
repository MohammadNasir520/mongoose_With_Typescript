import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

// 4. creating schema using 3 generic parameter 1.interface 2.Model 3.methods
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

// 5. Schema.static and there will be static name and a function name
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins: any = await this.find({ role: "admin" });
  console.log(admins);
  return admins;
});

// 6. schema.method
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

//7.  passing the user model which was created by extending mongoose's built in Model in the sequence number 3
const User = model<IUser, UserModel>("User", userSchema);

export default User;
