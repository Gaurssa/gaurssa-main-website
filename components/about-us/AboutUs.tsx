import Image from 'next/image';
import { AboutUsInfoCard } from './AboutUsInfoCard';
import { AboutUsOverview } from './AboutUsOverview';

export const AboutUs = () => {
	return (
		<section className=" h-[90vh] overflow-hidden w-full">
			<div className="max-w-[1760px] mx-auto grid grid-cols-2 items-start h-full">
				<div className="flex flex-col justify-between col-start-1 col-end-2 h-full  pt-20">
					<AboutUsOverview />
					<AboutUsInfoCard />
				</div>

				<div className="relative col-start-2 -col-end-1 w-full h-full">
					<div className=" w-full h-full  absolute bottom-40 -right-20">
						<Image
							width={1000}
							height={1000}
							src="/home/bosco-verticale.png"
							alt="Bosco Verticale"
							className="scale-75"
						/>
						<p className=" rotate-90 absolute -bottom-16 right-4 flex  flex-col font-extrabold text-black/70 text-[40px]/10">
							<span>BOSCO</span>
							<span>VERTICALE</span>
						</p>
						<div className="absolute -bottom-44 w-full h-full bg-[linear-gradient(to_bottom,_transparent_80%_,#fff)] left-0"></div>
					</div>
				</div>
			</div>
		</section>
	);
};
