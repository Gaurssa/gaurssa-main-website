import { Text } from '@/components/ui/text';

const HealthcareInitiatives = () => {
	return (
		<section className="mt-8">
			<HealtcareTitle title="Why Health Care Initiatives ?" />
			<Text className="mt-2">
				<span>
					The healthcare crisis in underserved communities is alarming. GCG
					recognizes that limited access to healthcare, education, and early
					intervention fuels this challenge, particularly in remote areas where
					services are scarce. We are committed to changing this narrative
					through proactive healthcare solutions.
				</span>
				<br />
				<br />
				<span>
					We are dedicated to tackling these challenges head-on by providing
					preventive care, health education, and accessible medical services.
					GCG’s proactive healthcare initiatives are designed to reduce disease
					prevalence, increase awareness, and offer long-term solutions to
					improve health outcomes in vulnerable populations.
				</span>
			</Text>
		</section>
	);
};

const HealthcareMetrics = () => {
	return (
		<div className="flex flex-col md:flex-row md:gap-20 gap-4">
			<Text className="font-light md:text-[5rem] text-[4rem] flex flex-col ">
				<span className="">71.1%</span>
				<span className="font-normal text-sm -mt-4">
					Annual death due to lack of heath care
				</span>
			</Text>

			<Text className="font-light md:text-[5rem] text-[4rem] flex flex-col">
				<span>66,0000</span>
				<span className="font-normal text-sm -mt-4">
					Annual death due to lack of heath care
				</span>
			</Text>
		</div>
	);
};

const HealthcareImpact = () => {
	return (
		<section className="mt-8">
			<HealtcareTitle title="How We're Making a Difference" />
			<Text>
				The healthcare crisis in underserved communities is alarming. GCG
				recognizes that limited access to healthcare, education, and early
				intervention fuels this challenge, particularly in remote areas where
				services are scarce. We are committed to changing this narrative through
				proactive healthcare solutions.
			</Text>

			<div className="mt-12 flex flex-col md:flex-row md:justify-between gap-10">
				<HealthcareStats metrics="20%-50%" label="Diseaes Prevention Rate" />
				<HealthcareStats metrics="300-10,000" label="Diseaes Prevention Rate" />
				<HealthcareStats metrics="All Nepal" label="Healthcare" />
			</div>
		</section>
	);
};

const HealthcareStats = ({
	metrics,
	label,
}: {
	metrics: string;
	label: string;
}) => {
	return (
		<Text className="text-primary-600 flex flex-col gap-2 lg:gap-4">
			<span className="xl:text-[52px] text-[40px] ">{metrics}</span>
			<span className="font-normal lg:text-base text-sm">{label}</span>
		</Text>
	);
};

const HealtcareTitle = ({ title }: { title: string }) => {
	return <h2 className="text-h2 text-gray-950">{title}</h2>;
};

export { HealthcareImpact, HealthcareInitiatives, HealthcareMetrics };
