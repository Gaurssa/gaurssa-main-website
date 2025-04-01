import { Navbar } from '@/components/navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=" ">
			<Navbar />
			<main className="pt-24 bg-amber-300 ">{children}</main>
		</div>
	);
};

export default Layout;
