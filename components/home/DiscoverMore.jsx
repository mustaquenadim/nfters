import Card from '../ui/Card';
import { integralCF } from '@/assets/fonts';

const DiscoverMore = () => {
	return (
		<section className="container">
			<h2
				className={`${integralCF.className} font-bold text-[1.75rem] leading-[2.1rem]`}
			>
				Discover more NFTs
			</h2>
			<div className="grid grid-cols-4 gap-10">
				<Card />
			</div>
		</section>
	);
};

export default DiscoverMore;
