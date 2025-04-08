'use client';

import { MegaMenuType } from '@/constants/navbar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { NavbarList } from './NavbarList';

export const NavbarMegaMenu = ({ data }: { data: MegaMenuType[] }) => {
	const [activeId, setActiveId] = useState<number | null>(null);
	const activeItem = data.find((item) => item.id === activeId);

	return (
		<div className="flex justify-between bg-neutral-50 overflow-hidden h-96">
			<div
				className={cn(
					'w-[25rem] h-full overflow-hidden relative transition-opacity duration-500 ease-in-out',
					activeItem ? 'opacity-100 ' : 'opacity-0 '
				)}
			>
				{activeItem && (
					<>
						<Image
							src={activeItem.image}
							alt={activeItem.label}
							width={1000}
							height={1000}
							className="w-full h-full object-cover object-center block"
						/>
						<div className="w-full h-full bg-[linear-gradient(to_left,_white_2%,_transparent)] absolute z-[9999] top-0" />
					</>
				)}
			</div>

			{/* Menu items */}
			<ul className="grid text-neutral-50 grid-cols-2 gap-x-28 gap-y-2 max-w-[40rem] mx-auto items-center h-fit py-24">
				{data.map((data) => (
					<NavbarList
						key={data.id}
						data={data}
						activeId={activeId}
						setActiveId={setActiveId}
					/>
				))}
			</ul>
		</div>
	);
};
