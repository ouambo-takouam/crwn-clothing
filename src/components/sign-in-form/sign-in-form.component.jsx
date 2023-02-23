import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../store/user/user.action';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const signInWithGoogle = () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));

			setFormFields(defaultFormFields);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					name="email"
					value={email}
					required
					onChange={handleChange}
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					value={password}
					required
					onChange={handleChange}
				/>

				<div className="buttons-container">
					<Button type="submit" buttonType="inverted">
						Sign In
					</Button>

					<Button type="button" onClick={signInWithGoogle} buttonType="google">
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};
export default SignInForm;
