import { ABOUT_US } from '@/constants/home';

export const AboutUsInfoCard = () => {
	return (
		<div className="container mx-auto  py-10">
			<ul className="grid grid-cols-1 md:grid-cols-2 gap-6 ]">
				{ABOUT_US.map((value, index) => (
					<li
						key={index}
						className="border border-primary-200 p-3 flex justify-between flex-col max-h-[10rem] h-[10rem]"
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
