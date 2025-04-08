export const Video = () => {
	return (
		<video
			loop
			muted
			autoPlay
			width="100%"
			height="100%"
			controls={false}
			className="w-full h-full object-center object-cover"
		>
			<source src="/home/hero_video.mp4" type="video/mp4" />
			<source src="/home/hero_video.ogg" type="video/ogg" />
			Your browser does not support the video tag.
		</video>
	);
};
