import Image from 'next/image';

export const GcgSubsidairyModel = () => {
	return (
		<div className="h-full relative">
			<p className="text-primary-600 text-3xl font-bold absolute top-40 -rotate-90 -left-32">
				GCG EYEWARE
			</p>
			<div className="w-[14rem] h-full bg-[linear-gradient(to_top,_#2077bc_65%,transparent)] "></div>
			<div className="w-[32.5rem] absolute -bottom-0 -left-40  ">
				<Image
					src="/home/chasmis-girl-2.png"
					alt="Eyeglass"
					width={1500}
					height={1500}
					className="w-full h-full object-center object-contain"
				/>
			</div>
		</div>
	);
};
