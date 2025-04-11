import { CSRDataType } from '@/constants/csr';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Text } from '../ui/text';

export const CSRCard = ({ data }: { data: CSRDataType }) => {
	return (
		<li
			className={cn(
				'w-full h-[25rem] relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] list-none'
			)}
		>
			<Image
				width={500}
				height={500}
				// alt={data.description || data?.alt}
				alt="Image"
				src={data.image}
				className="h-full w-full block object-cover object-center"
			/>
			<div
				className={cn(
					' w-full h-full bg-[linear-gradient(to_bottom,_transparent_0%_,transparent_60%_,black_90%)] absolute z-[10] bottom-0 flex flex-col self-end'
				)}
			>
				{/* <p className="absolute bottom-0 p-4 flex flex-col"> */}
				<Text className="absolute bottom-0 p-4 flex flex-col">
					<span className={cn('text-xl  text-neutral-100 font-bold ')}>
						{data.stats}
					</span>
					<span className={cn('  text-neutral-100 font-normal')}>
						{data.description}
					</span>
				</Text>
			</div>
		</li>
	);
};
