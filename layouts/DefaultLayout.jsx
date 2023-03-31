import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

const DefaultLayout = ({ children, className }) => {
	return (
		<>
			<Navbar />
			<main className={className}>{children}</main>
			<Footer />
		</>
	);
};

export default DefaultLayout;
