import { HeroTitle } from './HeroTitle';
import { ScrollVisualCue } from './ScrollVisualCue';
import { SubsidiaryCompanies } from './SubsidiaryCompanies';
import { Video } from './Video';

export const HeroSection = () => {
	return (
		<>
			<Video />
			<div className="bg-[linear-gradient(to_right_,black_15%,_transparent_50%),linear-gradient(to_bottom,black,rgba(0,0,0,0)_10%,_90%,black_100%)] h-full w-full absolute inset-0"></div>
			<div className="absolute flex flex-col inset-0 top-[25%] z-[10] justify-between py-4 ">
				{/* <div> */}
				<HeroTitle />
				{/* <p>Home Page</p> */}
				{/* </div> */}
				<div className="flex flex-col items-end gap-8">
					<ScrollVisualCue />
					<SubsidiaryCompanies />
				</div>
			</div>
		</>
	);
};
