import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../button/button.component';
import './payment-form.styles.scss';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) return;
	};

	return (
		<div className="payment-form-container">
			<div className="form-container">
				<h2>Credit Cart Payment:</h2>
				<CardElement />
				<Button buttonType="inverted" onClick={paymentHandler}>
					Pay now
				</Button>
			</div>
		</div>
	);
};

export default PaymentForm;
