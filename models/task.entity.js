import * as yup from "yup";

export class TaskEntity {
  constructor(
    title,
    description,
    completed,
    dueDate,
    assignedTo,
    assignedToElse,
    assignedBy,
    timestamps
  ) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.dueDate = dueDate;
    this.assignedTo = assignedTo;
    this.assignedToElse = assignedToElse;
    this.assignedBy = assignedBy;
    this.timestamps = timestamps;
  }

  static yupSchema() {
    return yup.object({
      title: yup.string().required().nullable(),
      description: yup.string().required().nullable(),
      completed: yup.string().required().nullable(),
      dueDate: yup.string().required().nullable(),
      assignedTo: yup.string().required().nullable(),
      assignedToElse: yup.string().required().nullable(),
      assignedBy: yup.string().required().nullable(),
      timestamps: yup.string().required().nullable(),
      // password: yup
      //     .string()
      //     .trim()
      //     .min(8, "Password Requirement Length")
      //     .matches(/\d/, "Password Requirement Number")
      //     .matches(
      //         /[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~]/,
      //         "Password Requirement Special Character"
      //     )
      //     .required("Password is required field")
      //     .nullable(),
      //     userType: yup.string().required().nullable()
    });
  }
}
