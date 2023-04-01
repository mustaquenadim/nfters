import Button from '../ui/Button';
import Card from '../ui/Card';
import { integralCF } from '@/assets/fonts';

const DiscoverMore = () => {
	return (
		<section className="pt-16 pb-12 bg-[#D9E0EC] bg-opacity-20">
			<div className="container space-y-9">
				<h2
					className={`${integralCF.className} font-bold text-[1.75rem] leading-[2.1rem]`}
				>
					Discover more NFTs
				</h2>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<Button>All Categories</Button>
						<Button>Art</Button>
						<Button>Celebrities</Button>
						<Button>Gaming</Button>
						<Button>Sport</Button>
						<Button>Music</Button>
						<Button>Crypto</Button>
					</div>
					<Button>All Filters</Button>
				</div>
				<div className="grid grid-cols-4 gap-10">
					<Card />
				</div>
				<Button className="m-auto">More NFTs</Button>
			</div>
		</section>
	);
};

export default DiscoverMore;
