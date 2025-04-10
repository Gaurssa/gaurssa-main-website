import Image from 'next/image';

export const GcgSubsidairyModel = () => {
	return (
		<div className=" h-full  md:pl-20">
			<p className="text-primary-600 text-xl md:text-3xl font-bold absolute top-40 hidden md:block -rotate-90 -left-12">
				GCG EYEWARE
			</p>
			<div className="lg:w-[14rem] md:w-[12rem] md:h-full w-screen	 h-[8rem] bg-[linear-gradient(#2077bc,_#2077bc)]    md:bg-[linear-gradient(to_top,_#2077bc_65%,transparent)] md:static absolute top-36 md:shadow-none  shadow-[0_0_20px__5px_#2077bc]"></div>
			<div className="xl:w-[32.5rem] lg:w-[28rem] md:w-[24rem] w-[16rem] absolute md:bottom-0 xl:-left-20  md:-left-12 left-[16%] sm:left-[30%] 	 md:top-auto top-0  ">
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
