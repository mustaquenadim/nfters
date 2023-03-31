import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, EffectCards, Pagination } from 'swiper';

import Abstract2 from '@/assets/images/abstract-2.jpg';
import Abstract7 from '@/assets/images/abstract-7.jpg';
import Abstract8 from '@/assets/images/abstract-8.jpg';

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
			<SwiperSlide className="">
				<Image
					src={Abstract2}
					alt="Abstract Image 2"
					className="w-[25rem] h-[27.5rem] rounded-3xl"
				/>
			</SwiperSlide>
			<SwiperSlide className="">
				<Image
					src={Abstract7}
					alt="Abstract Image 7"
					className="w-[25rem] h-[27.5rem] rounded-3xl"
				/>
			</SwiperSlide>
			<SwiperSlide className="">
				<Image
					src={Abstract8}
					alt="Abstract Image 8"
					className="w-[25rem] h-[27.5rem] rounded-3xl"
				/>
				<div class="group-hover:opacity-100 duration-300 absolute z-20 inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">
					Dwayne
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
