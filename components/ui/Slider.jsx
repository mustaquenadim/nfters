import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, EffectCards, Pagination } from 'swiper';

import Abstract2 from '@/assets/images/abstract-2.jpg';
import Abstract7 from '@/assets/images/abstract-7.jpg';
import Abstract8 from '@/assets/images/abstract-8.jpg';

import Artist1 from '@/assets/images/artist-1.png';
import EthereumIcon from '@/assets/icons/EthereumIcon';

const slides = [
	{
		image: Abstract2,
		artist: Artist1,
	},
	{
		image: Abstract7,
		artist: Artist1,
	},
	{
		image: Abstract8,
		artist: Artist1,
	},
];

const Slide = ({ image, artist }) => {
	return (
		<div className="relative max-w-[25rem]">
			<Image
				src={image}
				alt="Abstract Image 8"
				className="w-full h-[27.5rem] rounded-3xl"
			/>
			<div className="absolute top-0 text-white w-full h-full p-[1.625rem]">
				<div className="relative h-full w-full">
					<div className="absolute top-0">
						<div className="text-[1.75rem] font-bold -tracking-wider">
							Abstr Gradient NFT
						</div>
						<div className="flex items-center space-x-[0.875rem] mt-2">
							<Image
								src={artist}
								alt="Artist Image"
								className="w-8 h-8 rounded-full"
							/>
							<div className="font-bold text-xl">Arkhan17</div>
						</div>
					</div>
					<div className="absolute bottom-0 w-full glassmorphism px-[1.625rem] py-[0.875rem]">
						<div className="flex items-center justify-between">
							<div className="space-y-[7px]">
								<div className="font-medium text-xs">Current Bid</div>
								<div className="flex items-center font-bold text-base">
									<EthereumIcon className="text-white fill-current mr-2.5" />
									0.25 ETH
								</div>
							</div>
							<div className="space-y-[7px]">
								<div className="font-medium text-xs">Ends in</div>
								<div className="font-bold text-base">12h 43m 42s</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Slider = () => {
	return (
		<Swiper
			effect={'cards'}
			grabCursor={true}
			// centeredSlides={true}
			// slidesPerView={'auto'}
			cardsEffect={{
				perSlideOffset: 16,
				rotate: false,
				slideShadows: false,
			}}
			pagination={false}
			// loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			modules={[Autoplay, EffectCards, Pagination]}
		>
			{slides.map(({ image, artist }, index) => (
				<SwiperSlide key={index}>
					<Slide image={image} artist={artist} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
