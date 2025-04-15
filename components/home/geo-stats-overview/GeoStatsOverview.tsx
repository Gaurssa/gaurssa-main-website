import Image from 'next/image';
import { GeoLocationMetrics } from './GeoLocationMetrics';
import LocationButton from './LocationButton';

export const GeoStatsOverview = () => {
	return (
		<>
			<GeoLocationMetrics />
			<LocationButton />
			<div className=" w-full md:px-0 px-4 ">
				<Image
					src="/home/worldMap.png"
					alt="World Map"
					width={1000}
					height={1000}
					className="mx-auto"
				/>
			</div>
		</>
	);
};
