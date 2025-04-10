import Image from 'next/image';
import { AboutUsInfoCard } from './AboutUsInfoCard';
import { AboutUsOverview } from './AboutUsOverview';

export const AboutUs = () => {
	return (
		<>
			<div className="max-w-[1760px] mx-auto flex flex-col md:grid grid-cols-5 grid-rows-2  gap-10  h-full ">
				<AboutUsOverview />
				<AboutUsInfoCard />

				<div className="  relative  col-start-4 -col-end-1  xl:row-start-1 xl:-row-end-1 lg:row-start-1 lg:row-end-2    items-center hidden lg:flex   self-center overflow-hidden">
					<Image
						width={1000}
						height={1000}
						src="/home/bosco-verticale.png"
						alt="Bosco Verticale"
						className="scale-75"
					/>
					<p className=" rotate-90 absolute right-4 hidden xl:flex  flex-col font-extrabold text-black/70 text-[40px]/10 lg:bottom-64 lg:-right-16 ">
						<span>BOSCO</span>
						<span>VERTICALE</span>
					</p>
					<div className="absolute  w-full h-64 bg-[linear-gradient(to_bottom,_transparent_,#fff,_#fff)]  left-0 md:-bottom-4 bottom-20 xl:bottom-[5.5rem]"></div>
				</div>
			</div>
			{/* <div className="max-w-[1760px] mx-auto xl:grid grid-cols-2 items-start h-full">
				<div className="flex flex-col md:gap-0 gap-12	 justify-between col-start-1 col-end-2 h-full  ">
					<AboutUsOverview />
					<AboutUsInfoCard />
				</div>

				<div className="relative col-start-2 -col-end-1 w-full h-full">
					<div className=" w-full h-full  absolute -bottom-16 xl:-bottom-32 2xl:bottom-40 -right-20">
						<Image
							width={1000}
							height={1000}
							src="/home/bosco-verticale.png"
							alt="Bosco Verticale"
							className="scale-75"
						/>
						<p className=" rotate-90 absolute -bottom-16 right-4 hidden lg:flex  flex-col font-extrabold text-black/70 text-[40px]/10 ">
							<span>BOSCO</span>
							<span>VERTICALE</span>
						</p>
						<div className="absolute xl:-bottom-32 2xl:-bottom-44 w-full h-full bg-[linear-gradient(to_bottom,_transparent_80%_,#fff)] left-0"></div>
					</div>
				</div>
			</div> */}
		</>
	);
};
