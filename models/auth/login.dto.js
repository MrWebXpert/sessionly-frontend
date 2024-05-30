// import * as yup from "yup";
// export class LoginDto {
// 	constructor(email, password){
//         this.email = email
//         this.password = password
//     }
// 	static yupSchema() {
// 		return yup.object({
// 			email: yup.string().trim().email('Invalid email format').required("Email is required field").nullable(),

// 			/* Validating the password. */
// 			password: yup
// 				.string()
// 				.trim()
// 				.min(8, "Password Requirement Length")
// 				.matches(/\d/, "Password Requirement Number")
// 				.matches(
// 					/[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~]/,
// 					"Password Requirement Special Character"
// 				)
// 				.required("Password is required field")
// 				.nullable(),
// 		});
// 	}
// }


import * as yup from "yup";

export class LoginDto {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    static yupSchema() {
        return yup.object({
            email: yup.string().trim().email('Invalid email format').required("Email is required field").nullable(),

            /* Validating the password. */
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
        });
    }
}

