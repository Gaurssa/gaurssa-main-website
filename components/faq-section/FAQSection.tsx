'use client';

import { FAQS } from '@/constants/faq';
import { useState } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';

export const FAQSection = () => {
	const [activeFAQ, setActiveFAQ] = useState('Automative');

	const filteredFAQ = FAQS.filter((faq) => faq.heading === activeFAQ);

	return (
		<div className="max-w-[870px] mx-auto flex justify-center items-center  flex-col">
			<h2 className="text-[44px] font-dm-serif text-neutral-50 text-center">
				Clearing Up the Confusion
			</h2>

			<div className="flex flex-col items-center mt-4 w-full">
				<ul className="flex items-center gap-6">
					{FAQS.map((faq) => (
						<li key={faq.heading}>
							<Button
								variant={'bordered-primary'}
								size={'sm'}
								onClick={() => setActiveFAQ(faq.heading)}
								className={`${
									activeFAQ === faq.heading
										? 'bg-primary-400 text-neutral-50 border-transparent'
										: ''
								}`}
							>
								{faq.heading}
							</Button>
						</li>
					))}
				</ul>
				<Accordion type="single" className="min-w-full mt-12" collapsible>
					{filteredFAQ.map((faq) =>
						faq.items.map((item, i) => (
							<AccordionItem
								value={item.title}
								key={item.id}
								className="border-b border-neutral-900 w-full py-4"
							>
								<AccordionTrigger className="text-neutral-50 no-underline data-[state=open]:no-underline hover:no-underline cursor-pointer font-medium text-lg w-full flex justify-between">
									<span className="flex gap-4">
										<span> {i < 10 ? `0${i + 1}` : i}</span>
										<span>{item.title}</span>
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-neutral-300 pl-10 text-lg font-light max-w-full">
									{item.description}
								</AccordionContent>
							</AccordionItem>
						))
					)}
					{/* */}
				</Accordion>
			</div>
		</div>
	);
};
