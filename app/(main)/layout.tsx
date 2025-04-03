import { Navbar } from '@/components/navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=" ">
			<Navbar />
			<main className="">{children}</main>
		</div>
	);
};

export default Layout;
