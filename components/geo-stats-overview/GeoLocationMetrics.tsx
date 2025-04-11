export const GeoLocationMetrics = () => {
	return (
		<div className="flex items-center w-full md:w-[32rem] justify-center gap-6 md:gap-0 md:justify-between mx-auto md:mb-0 -mb-2 px-4 md:px-0 ">
			<h3 className="flex flex-col items-center justify-center [text-shadow:0_0_5px_#ffffffcc,_0_0_5px_#ffffffcc] text-neutral-50">
				<span className="font-[200] text-5xl md:text-[84px]/20">12</span>
				<span className="text-[10px] md:text-base">Countries</span>
			</h3>

			<h3 className="flex flex-col items-center justify-center text-primary-600 [text-shadow:0_0_5px_#2076bccf,_0_0_5px_#2076bccf]">
				<span className="font-[200] text-5xl md:text-[84px]/20 ">06</span>
				<span className="text-[10px] md:text-base">Sectors</span>
			</h3>

			<h3 className="flex flex-col items-center justify-center text-neutral-50 [text-shadow:0_0_5px_#ffffffcc,_0_0_5px_#ffffffcc]">
				<span className="font-[200] text-5xl md:text-[84px]/20  ">2,000</span>
				<span className="text-[10px] md:text-base">
					Employees around the world
				</span>
			</h3>
		</div>
	);
};
