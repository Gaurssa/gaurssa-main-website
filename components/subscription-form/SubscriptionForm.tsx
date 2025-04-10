'use client';

import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';

export const SubscriptionForm = () => {
	const [value, setValue] = useState('');
	const [errorMsg, setErrorMsg] = useState<string | null>(null);

	const isValidEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (value.trim() === '' || !value) {
			setErrorMsg('Enter a valid email address');
		} else if (!isValidEmail(value)) {
			setErrorMsg('Enter a valid email address');
		} else {
			console.log('Form submitted');
			setErrorMsg(null);
			setValue('');
		}
	}

	return (
		<form className="relative mt-4">
			<div>
				<input
					type="email"
					placeholder="Your Email Here"
					className="border border-primary-200 h-12 rounded-full w-full px-4 pr-32 bg-primary-50 font-light focus:border-transparent focus:outline-primary-200"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						if (e.target.value === '') setErrorMsg('Enter your valid email');
						if (errorMsg) setErrorMsg(null);
					}}
				/>
				<p className="text-red-500 text-sm font-light pl-5">
					{!errorMsg ? null : errorMsg}
				</p>
			</div>
			<Button
				variant={'secondary'}
				size={'sm'}
				className="absolute right-1 top-1"
				type="button"
				onClick={handleSubmit}
			>
				Stay Updated
			</Button>
		</form>
	);
};
