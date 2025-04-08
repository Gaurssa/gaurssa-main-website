import { MegaMenuType } from '@/constants/navbar';
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
				className={`hover:text-primary-600 font-bold text-[28px] uppercase duration-300 transition-colors text-gray-800 text-nowrap ${data.id === activeId ? 'text-primary-600' : ''}`}
				onClick={() => setActiveId((id) => (data.id !== id ? data.id : null))}
				onMouseEnter={() => setActiveId(data.id)}
				onMouseLeave={() => setActiveId(null)}
			>
				{data.label}
			</Link>
		</li>
	);
};
