import * as yup from "yup";

export class StaffEntity {
  constructor(id, fullname, email, ip, userType ,tel,timeOfLogin,timeOfLogout,history,track,activity,action) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.ip = ip;
    this.userType = userType;
    this.tel = tel;
    this.timeOfLogin=timeOfLogin;
    this.timeOfLogout=timeOfLogout;
    this.history=history;
    this.track=track;
    this.activity=activity;
    this.action=action;
    
  
  }

  static yupSchema() {
    return yup.object({
      fullname: yup.string().required().nullable(),
      email: yup.string().required().email().nullable(),
      ip: yup.string().required().nullable(),
      userType: yup.string().required().nullable(),
      tel: yup.string().required().nullable(),
      timeOfLogin: yup.string().required().nullable(),
      timeOfLogout: yup.string().required().nullable(),
      history: yup.string().required().nullable(),
      track: yup.string().required().nullable(),
      activity: yup.string().required().nullable(),
      action: yup.string().required().nullable(),
      password: yup
        .string()
        .trim()
        .min(8, "Password Requirement Length")
        .matches(/\d/, "Password Requirement Number")
        .matches(
          /[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~]/,
          "Password Requirement Special Character"
        )
        .required("Password is required field")
        .nullable(),
      userType: yup.string().required().nullable(),
    });
  }
}
