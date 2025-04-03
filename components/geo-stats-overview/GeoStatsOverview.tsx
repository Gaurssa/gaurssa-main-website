import Image from 'next/image';
import { GeoLocationMetrics } from './GeoLocationMetrics';
import LocationButton from './LocationButton';

export const GeoStatsOverview = () => {
	return (
		<section className="bg-black h-screen py-20 flex flex-col gap-10">
			<GeoLocationMetrics />
			<LocationButton />
			<div className=" w-full ">
				<Image
					src="/home/worldMap.png"
					alt="World Map"
					width={1000}
					height={1000}
					className="mx-auto"
				/>
			</div>
		</section>
	);
};
