import { GCG_HEALTHCARE } from '@/constants/healthcare/healthcare';
import Image from 'next/image';

export const HealthcareGallery = () => {
	return (
		<section className="sm:h-[30rem]  flex md:flex-row flex-col gap-2 w-full">
			<div className="md:w-[70%] h-[20rem]  md:h-full overflow-hidden">
				<Image
					src={'/healthcare/healthcare-1.png'}
					alt="GCG EYEWEAR"
					width={1200}
					height={1200}
					className="w-full h-full object-cover object-center"
				/>
			</div>

			<ul className="md:flex-1 h-full w-full grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-2 ">
				{GCG_HEALTHCARE.map((gcg) => (
					<li
						className="w-full  h-full md:h-[25%] lg:h-full overflow-hidden block"
						key={gcg.id}
					>
						<Image
							src={gcg.image}
							alt="GCG EYEWEAR"
							width={1200}
							height={1200}
							className="w-full h-full object-cover object-center"
						/>
					</li>
				))}
			</ul>
		</section>
	);
};
