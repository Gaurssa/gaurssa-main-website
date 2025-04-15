'use client';

import { SubscriptionForm } from '@/components/subscription-form/SubscriptionForm';
import {
	FOOTER_BUSINESS_DATA,
	QUICK_LINKS_DATA,
} from '@/constants/home/footer-data';
import Image from 'next/image';
import Link from 'next/link';
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
	return (
		<footer className=" h-fit md:h-screen   py-10 px-4 lg:px-20 w-full flex items-end">
			<div className="flex w-full flex-col justify-between gap-6 md:gap-12   max-w-[110rem] mx-auto ">
				<div className="flex flex-col gap-4">
					<div className="w-[16rem] md:w-[24rem]">
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

				<div className="flex justify-between flex-wrap gap-x-24 gap-6 w-full ">
					<div className="flex justify-between w-full  lg:w-1/2">
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
					</div>

					<div className="w-full sm:max-w-[440px]">
						<h3 className="text-primary-600 font-semibold uppercase text-lg mb-2">
							Subscribe to our newsletter
						</h3>
						<p className="text-gray-800 font-light">
							Subscribe to our newsletter for the latest job openings and career
							insights!
						</p>

						<SubscriptionForm />
					</div>
				</div>

				<div className="gradient-border w-full h-[1px] md:-mt-4"></div>

				<div className="flex justify-between flex-col sm:flex-row gap-4 sm:gap-0 md:-my-4">
					<p className="text-gray-600 font-light text-[12px]">
						&copy; 2025 Gaurssa Group of Companies. All rights reserved.
					</p>

					<ul className="flex items-center ">
						{BOTTOM_FOOTER_DATA.map((data) => (
							<li
								key={data.id}
								className="lg:px-4 px-2 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-gray-200 leading-3 "
							>
								<Link
									className=" text-gray-600 text-[12px]  font-light "
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
