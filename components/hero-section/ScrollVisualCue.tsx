import { ArrowDownIcon } from '@/assets/icons/ArrowDownIcon';

export const ScrollVisualCue = () => {
	return (
		<div className=" self-end  px-20  flex flex-col items-center">
			<p className="font-solitreo text-2xl text-neutral-50/50">Scroll Down</p>
			<span className="h-12 w-8 rounded-full border border-neutral-50/50 flex items-center justify-center overflow-hidden">
				<span className="text-neutral-50 infinite-drop block">
					<ArrowDownIcon className="h-8 w-8 stroke-white/50" />
				</span>
			</span>
		</div>
	);
};
