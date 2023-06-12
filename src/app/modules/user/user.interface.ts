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

// Put all user instance methods in this interface:
export interface IUserMethods {
  fullName(): string;
}
