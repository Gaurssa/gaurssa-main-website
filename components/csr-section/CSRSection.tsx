import { Button } from '../ui/button';

export const CSRSection = () => {
	return (
		<div className="max-w-[870px] mx-auto ">
			<h2 className="text-[44px] font-dm-serif text-gray-950 text-center">
				Beyond Profits
			</h2>
			<p className="text-gray-800 text-lg font-light text-center mt-2">
				At Gaurssa Group, we believe in creating a positive impact that extends
				far beyond our business operations. We&apos;re dedicated to empowering
				individuals and strengthening communities across Nepal. Our initiatives
				span employment development, environmental stewardship, education, child
				welfare, senior citizen care, women&apos;s empowerment, and more,
				reflecting our commitment to holistic societal well-being.
			</p>

			<div className="flex items-center justify-center mt-6 gap-3">
				<Button variant={'primary-outline'} size="sm">
					Know us more
				</Button>
				<Button variant={'primary-outline'} size="sm">
					Partner with us
				</Button>
			</div>
		</div>
	);
};
