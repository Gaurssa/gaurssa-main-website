import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextLink } from './NextLink';

test('changes the class when hovered', async () => {
	render(
		<NextLink page="www.facebook.com" className="custom-class">
			Facebook
		</NextLink>
	);
	const link = screen.getByRole('link');
	await userEvent.hover(screen.getByText('Facebook'));

	expect(screen.getByRole('link')).toHaveTextContent('Facebook');
	expect(link).toHaveAttribute('href', 'www.facebook.com');
	expect(link).toHaveClass('custom-class');
});
