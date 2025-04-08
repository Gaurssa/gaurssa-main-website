'use client';

import { LOCATION_OVERVIEW } from '@/constants/location-overview';
import { useState } from 'react';
import { Button } from '../ui/button';

const LocationButton = () => {
	const [activeButton, setActiveButton] = useState<null | number>(0);
	return (
		<div className="max-w-[75rem] mx-auto flex lg:flex-wrap lg:justify-center gap-3 overflow-x-auto w-full lg:overflow-x-visible [scrollbar-width:none] px-4">
			{LOCATION_OVERVIEW.map((location) => (
				<Button
					className={`bg-gray-950 text-gray-600 px-4  hover:bg-primary-400 hover:text-neutral-50 cursor-pointer transition-all duration-300 ${activeButton === location.id ? 'bg-primary-400 text-neutral-50' : ''}`}
					key={location.id}
					onClick={() => setActiveButton(location.id)}
				>
					{location.name}
				</Button>
			))}
		</div>
	);
};

export default LocationButton;
