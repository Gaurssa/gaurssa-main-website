import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/shared/footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="">
			<Navbar />
			<main className="">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
