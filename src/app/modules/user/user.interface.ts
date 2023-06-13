import { HydratedDocument, Model } from "mongoose";
// serial number for making a static method
// 1. create a interface
export interface IUser {
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

// 2. create interface for methods
export interface IUserMethods {
  fullName(): string;
}

// 3. make an another interface which will extends Model and Model from mongoose and it is built in.
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
