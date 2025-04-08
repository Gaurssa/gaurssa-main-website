import { FIELD_OF_WORK } from '@/constants/field-of-work';
import { FieldOfWorkCard } from './FieldOfWorkCard';

export const FieldOfWork = () => {
	return (
		<>
			<h2 className="text-[32px] md:text-[44px] font-dm-serif px-4 md:px-20">
				Industries We Power
			</h2>
			<ul className="flex gap-4  overflow-x-scroll [scrollbar-width:none] py-6 md:py-10 px-4 md:px-20  h-full">
				{FIELD_OF_WORK.map((work) => (
					<FieldOfWorkCard key={work.id} data={work} />
				))}
			</ul>
		</>
	);
};
