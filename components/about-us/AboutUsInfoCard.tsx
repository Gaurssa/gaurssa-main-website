import { ABOUT_US } from '@/constants/home';

export const AboutUsInfoCard = () => {
	return (
		<div className="  lg:mx-auto w-full py-10 col-start-1 xl:col-end-4 -col-end-1 row-start-2 -row-end-1 ">
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
				{ABOUT_US.map((value, index) => (
					<li
						key={index}
						className="border border-primary-200 px-2 py-1 md:p-3 flex justify-between flex-col h-fit gap-6 md:gap-0 md:max-h-[10rem] md:h-[10rem] w-full bg-neutral-50 relative z-10"
					>
						<h3 className="text-2xl font-medium text-primary-900">
							{value.title}
						</h3>
						<p className="text-gray-800 font-light ">{value.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
