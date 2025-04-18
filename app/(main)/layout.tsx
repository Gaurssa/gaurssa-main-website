import { Footer } from '@/components/shared/footer/Footer';
import { AppNavbar } from '@/components/shared/navbar/AppNavbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="">
			<AppNavbar />
			<main className="">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
