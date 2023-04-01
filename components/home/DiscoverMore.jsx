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
				<div className="flex md:flex-row flex-col md:items-center items-start justify-between md:space-y-0 space-y-3">
					<div className="flex items-center md:flex-nowrap flex-wrap space-x-3 md:space-y-0 space-y-3">
						<Button variant="outlined" size="md">
							All Categories
						</Button>
						<Button variant="outlined" size="md">
							Art
						</Button>
						<Button variant="outlined" size="md">
							Celebrities
						</Button>
						<Button variant="outlined" size="md">
							Gaming
						</Button>
						<Button variant="outlined" size="md">
							Sport
						</Button>
						<Button variant="outlined" size="md">
							Music
						</Button>
						<Button variant="outlined" size="md">
							Crypto
						</Button>
					</div>
					<Button>All Filters</Button>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
					{Array.from({ length: 16 }).map((_, index) => (
						<Card key={index} />
					))}
				</div>
				<Button variant="outlined" size="lg" className="m-auto">
					More NFTs
				</Button>
			</div>
		</section>
	);
};

export default DiscoverMore;
