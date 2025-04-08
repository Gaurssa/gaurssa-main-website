'use client';

import { Button } from '@/components/ui/button';
import {
	FOOTER_BUSINESS_DATA,
	QUICK_LINKS_DATA,
} from '@/constants/footer-data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FooterList } from '../footer-list/FooterList';

const BOTTOM_FOOTER_DATA = [
	{
		id: 1,
		link: '#',
		label: 'Contact Us',
	},
	{
		id: 2,
		link: '#',
		label: 'Terms and Condition',
	},
	{
		id: 3,
		link: '#',
		label: 'Privacy Policy',
	},
];

export const Footer = () => {
	const [value, setValue] = useState('');
	return (
		<footer className="fixed h-fit -z-[10] bottom-0  py-10 px-20 w-full bg-[]">
			<div className="flex w-full flex-col justify-between gap-10   max-w-[110rem] mx-auto">
				<div className="flex flex-col gap-4">
					<div className="w-[24rem]">
						<Image
							src="/gaurssa-logo-large.png"
							alt="Guarssa Logo"
							width={1000}
							height={1000}
							className="object-center object-contain w-full h-full"
						/>
					</div>
					<div>
						<p className="text-gray-800 font-light">+977 1234567890</p>
						<p className="text-gray-800 font-light">
							Email: rajeetnakarmi@gaurssa.com
						</p>
					</div>
				</div>

				<div className="flex justify-between mb-8">
					<div>
						<h3 className="text-primary-600 font-semibold uppercase text-lg mb-4">
							Business
						</h3>
						<FooterList data={FOOTER_BUSINESS_DATA} />
					</div>

					<div>
						<h3 className="text-primary-600 font-semibold uppercase text-lg mb-4">
							Quick Links
						</h3>
						<FooterList data={QUICK_LINKS_DATA} />
					</div>

					<div className="max-w-[440px]">
						<h3 className="text-primary-600 font-semibold uppercase text-lg mb-4">
							Subscribe to our newsletter
						</h3>
						<p className="text-gray-800 font-light">
							Subscribe to our newsletter for the latest job openings and career
							insights!
						</p>

						<form className="relative mt-4">
							<input
								type="email"
								placeholder="Your Email Here"
								className="border border-primary-200 h-10 rounded-full w-full px-4 pr-32 bg-primary-50 font-light focus:border-transparent focus:outline-primary-200"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
							<Button
								variant={'secondary'}
								size={'xsm'}
								className="absolute right-1 top-1"
								type="button"
							>
								Stay Updated
							</Button>
						</form>
					</div>
				</div>

				<div className="flex justify-between border-t border-gray-100 pt-6 ">
					<p className="text-gray-600 font-light text-[12px]">
						&copy; 2025 Gaurssa Group of Companies. All rights reserved.
					</p>

					<ul className="flex items-center ">
						{BOTTOM_FOOTER_DATA.map((data) => (
							<li key={data.id} className="">
								<Link
									className="font-normal text-gray-600 text-[12px] [&:not(:last-child)]:border-r border-red-500 px-4"
									href={data.link}
								>
									{data.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* <div className="w-full h-full absolute top-0">
				<Image
					src="/mesh-gradient.png"
					alt="Gradient"
					width={1000}
					height={1000}
					className="w-full h-full object-cover"
				/>
			</div> */}
		</footer>
	);
};
