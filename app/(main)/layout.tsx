import { Footer } from '@/components/shared/footer/Footer';
import { Navbar } from '@/components/shared/navbar/Navbar';

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
