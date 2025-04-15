import { FooterDataType } from '@/constants/home/footer-data';
import Link from 'next/link';

export const FooterList = ({ data }: { data: FooterDataType[] }) => {
	return (
		<ul className="flex flex-col gap-2">
			{data.map((list) => (
				<li key={list.id}>
					<Link href={list.links} className="font-light text-gray-800">
						{list.label}
					</Link>
				</li>
			))}
		</ul>
	);
};
