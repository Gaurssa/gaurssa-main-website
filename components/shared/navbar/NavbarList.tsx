import { MegaMenuType } from '@/constants/home/navbar';
import Link from 'next/link';
import { SetStateAction } from 'react';

export const NavbarList = ({
	data,
	activeId,
	setActiveId,
}: {
	data: MegaMenuType;
	activeId: number | null;
	setActiveId: React.Dispatch<SetStateAction<number | null>>;
}) => {
	return (
		<li key={data.id}>
			<Link
				href={data.link}
				className={`hover:text-primary-600 font-bold md:font-bold text-base md:text-[28px] uppercase duration-300 transition-colors text-gray-800 text-nowrap ${data.id === activeId ? 'text-primary-600' : ''}`}
				onClick={() => setActiveId((id) => (data.id !== id ? data.id : null))}
				onMouseEnter={() => setActiveId(data.id)}
			>
				{data.label}
			</Link>
		</li>
	);
};
