import * as yup from "yup";
export class SignUpDto {
	constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }
	static yupSchema() {
		return yup.object({
			name: yup.string().trim().required("Name is required field").nullable(),
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
				

			// confirm_password: yup
			// 	.string()
			// 	.trim()
			// 	.oneOf([yup.ref("password")], "Password do not match!")
			// 	.required("confirm password is required")
			// 	.nullable(),
		});
	}
}
