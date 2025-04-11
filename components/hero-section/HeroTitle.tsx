import { Text } from '../ui/text';

export const HeroTitle = () => {
	return (
		<div className="sm:max-w-[860px] w-full lg:px-20 px-4">
			<h1 className="text-neutral-50 font-normal   font-dm-serif sm:text-5xl/[50px] lg:text-[52px]/14 sm:max-w-[80%] text-4xl w-ull">
				Driving Innovation, Excellence, and Growth Across Industries
			</h1>
			<Text
				variant={'neutral'}
				size="xl"
				className="sm:max-w-[60%] lg:max-w-full w-full sm:mt-6 mt-4"
			>
				We are committed to building a legacy of revolution, harnessing the
				power of innovation and collaboration to fuel meaningful progress across
				industries.
			</Text>
			{/* <p className="text-gray-200 text-[16px] w-full sm:max-w-[60%] lg:max-w-full lg:text-xl sm:mt-6 mt-4">
				We are committed to building a legacy of revolution, harnessing the
				power of innovation and collaboration to fuel meaningful progress across
				industries.
			</p> */}
		</div>
	);
};
