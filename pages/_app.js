import { DMSans } from '@/assets/fonts';
import DefaultLayout from '@/layouts/DefaultLayout';
import '@/styles/globals.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }) {
	return (
		<DefaultLayout className={`${DMSans.variable} font-dm-sans`}>
			<Component {...pageProps} />
		</DefaultLayout>
	);
}
