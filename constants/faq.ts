export interface FAQType {
	id: string;
	title: string;
	description: string;
}

export const FAQS = [
	{
		heading: 'Automative',
		items: [
			{
				id: 'faq1',
				title: 'What is your refund policy?',
				description:
					"We offer a full refund within 14 days of purchase if you're not satisfied with our service.",
			},
			{
				id: 'faq2',
				title: 'How can I contact customer support?',
				description:
					'You can reach out to our support team via the Contact Us page or email us at support@example.com.',
			},
			{
				id: 'faq3',
				title: 'Do I need an account to make a booking?',
				description:
					'Yes, creating an account is required to access booking features and track your activity.',
			},
			{
				id: 'faq4',
				title: 'Can I change or cancel my booking?',
				description:
					'Absolutely! You can modify or cancel your booking from your account dashboard, up to 24 hours before the scheduled time.',
			},
			{
				id: 'faq5',
				title: 'Is my personal information secure?',
				description:
					'Yes, we prioritize your privacy and use industry-standard encryption to protect your data.',
			},
		],
	},
	{
		heading: 'Textile',
		items: [
			{
				id: '1',
				title: 'What are the main types of textile fibers?',
				description:
					'Textile fibers are generally classified into natural fibers (like cotton, wool, and silk) and synthetic fibers (like polyester, nylon, and acrylic). Each type has its own properties and uses.',
			},
			{
				id: '2',
				title: 'What is sustainable or eco-friendly textile production?',
				description:
					'Sustainable textile production focuses on minimizing environmental impact by using organic materials, reducing water and chemical usage, recycling waste, and ensuring ethical labor practices.',
			},
			{
				id: '3',
				title: 'How is fabric quality determined?',
				description:
					'Fabric quality depends on factors like fiber type, thread count, weave, finish, and durability. High-quality textiles often feel smoother, last longer, and maintain color and structure after washing.',
			},
			{
				id: '4',
				title: 'What is the difference between woven and knitted fabrics?',
				description:
					'Woven fabrics are made by interlacing two sets of yarns at right angles, resulting in a structured, firm fabric. Knitted fabrics are made by looping yarns, making them stretchier and softer.',
			},
			{
				id: '5',
				title: 'How is dyeing done in the textile industry?',
				description:
					'Dyeing can be done at various stages — fiber, yarn, fabric, or garment. Methods include vat dyeing, reactive dyeing, and pigment dyeing, depending on the fiber type and desired effect.',
			},
		],
	},
	{
		heading: 'Healthcare',
		items: [
			{
				id: '1',
				title: 'What is preventive healthcare?',
				description:
					'Preventive healthcare includes regular checkups, screenings, and immunizations to prevent illnesses or detect them early. It helps maintain overall well-being and reduces the risk of chronic diseases.',
			},
			{
				id: '2',
				title: 'What mental health services are available?',
				description:
					'Mental health services include counseling, therapy, psychiatric care, support groups, and crisis intervention. These services aim to support emotional, psychological, and social well-being.',
			},
			{
				id: '3',
				title:
					'How can I manage a chronic condition like diabetes or hypertension?',
				description:
					'Effective management includes following a healthy diet, exercising regularly, taking prescribed medications, monitoring your condition, and maintaining regular check-ups with your healthcare provider.',
			},
			{
				id: '4',
				title: 'Does health insurance cover all medical expenses?',
				description:
					'Health insurance typically covers a portion of medical expenses, but coverage varies based on your plan. It may include doctor visits, hospitalization, prescriptions, and preventive services. Always review your policy for exact details.',
			},
			{
				id: '5',
				title:
					'When should I see a doctor for common symptoms like fever or fatigue?',
				description:
					'You should see a doctor if symptoms persist for more than a few days, worsen over time, or are accompanied by more severe signs like chest pain, shortness of breath, or confusion.',
			},
		],
	},
	{
		heading: 'Energy',
		items: [
			{
				id: '1',
				title: 'What is renewable energy?',
				description:
					'Renewable energy comes from natural sources that are constantly replenished, such as sunlight, wind, water, and geothermal heat. It is a sustainable alternative to fossil fuels.',
			},
			{
				id: '2',
				title: 'How can I reduce energy consumption at home?',
				description:
					'Simple steps include using LED lighting, turning off appliances when not in use, using energy-efficient appliances, and insulating your home to maintain temperature efficiently.',
			},
			{
				id: '3',
				title: 'What is the difference between solar and wind energy?',
				description:
					'Solar energy harnesses sunlight using solar panels, while wind energy uses turbines powered by the wind. Both are clean energy sources with different installation and geographical requirements.',
			},
			{
				id: '4',
				title: 'Why is energy conservation important?',
				description:
					'Conserving energy helps reduce environmental impact, lower utility bills, and preserve natural resources for future generations. It also contributes to lowering greenhouse gas emissions.',
			},
			{
				id: '5',
				title: 'Can renewable energy fully replace fossil fuels?',
				description:
					'While renewable energy is growing rapidly, complete replacement depends on technological advancements, energy storage solutions, infrastructure, and policy support. It’s a long-term but achievable goal.',
			},
		],
	},
];
