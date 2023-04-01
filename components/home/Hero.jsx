import { DMSans, integralCF } from '@/assets/fonts';
import Button from '../ui/Button';
import Slider from '../ui/Slider';
import LiveAuctionBadge from '@/assets/images/live-auction-badge.svg';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className="container grid md:grid-cols-2 grid-cols-1 gap-[6.125rem] pt-[4.5rem] pb-[7.625rem]">
			<div>
				<h1
					className={`${integralCF.className} lg:text-[2.5rem] md:text-4xl text-[2.5rem]`}
				>
					Discover, and collect Digital Art NFTs{' '}
				</h1>
				<p className={`mt-[22px] ${DMSans.variable} font-dm-sans`}>
					Digital marketplace for crypto collectibles and non-fungible tokens
					(NFTs). Buy, Sell, and discover exclusive digital assets.
				</p>
				<Button size="lg" className={'mt-10'}>
					Explore Now
				</Button>
				<div className="flex items-center space-x-[1.4375rem] mt-[1.875rem]">
					<div className="flex flex-col">
						<div
							className={`${integralCF.className} text-[2.5rem] leading-[3rem]`}
						>
							<span className="font-bold">98</span>K
						</div>
						<p className={`${DMSans.variable} font-dm-sans text-xl`}>Artwork</p>
					</div>
					<div className="flex flex-col">
						<div
							className={`${integralCF.className} text-[2.5rem] leading-[3rem]`}
						>
							<span className="font-bold">12</span>K
						</div>
						<p className={`${DMSans.variable} font-dm-sans text-xl`}>Auction</p>
					</div>
					<div className="flex flex-col">
						<div
							className={`${integralCF.className} text-[2.5rem] leading-[3rem]`}
						>
							<span className="font-bold">15</span>K
						</div>
						<p className={`${DMSans.variable} font-dm-sans text-xl`}>Artist</p>
					</div>
				</div>
			</div>
			<div className="relative flex justify-center">
				<Slider />
				<div className="absolute -left-16 top-[160px] z-[1] rotating-element md:block hidden">
					<Image src={LiveAuctionBadge} alt="Live Auction Badge" className="" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
