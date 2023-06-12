import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "7739",
    role: "student",
    password: "jhakanaka",
    name: {
      firstName: "mohammad",
      middleName: "nasir2",
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
  return user;
};
