import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, email, password, confirmPassword } = formFields;
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			dispatch(signUpStart(name, email, password));
		} catch (error) {
			console.log('user creation encountered an error', error);
		}

		setFormFields(defaultFormFields);
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					name="name"
					value={name}
					required
					onChange={handleChange}
				/>

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

				<FormInput
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					required
					onChange={handleChange}
				/>

				<Button type="submit" buttonType="inverted">
					Submit
				</Button>
			</form>
		</div>
	);
};
export default SignUpForm;
