import Image from 'next/image';
import Abstract2 from '@/assets/images/abstract-2.jpg';
import Abstract7 from '@/assets/images/abstract-7.jpg';
import Abstract8 from '@/assets/images/abstract-8.jpg';
import Artist1 from '@/assets/images/artist-1.png';
import Artist6 from '@/assets/images/artist-6.png';
import Button from '../ui/Button';
import { integralCF } from '@/assets/fonts';

const CallToAction = () => {
	return (
		<section className="container grid grid-cols-2 gap-[4.875rem] items-center">
			<div className="flex space-x-16">
				<div className="flex flex-col items-end">
					<div className="">
						<div className="relative">
							<Image
								src={Abstract2}
								alt="Abstract Image 2"
								className="w-[18.75rem] h-[18.75rem] rounded-xl"
							/>
							<Image
								src={Artist1}
								alt="Artist Image 1"
								className="w-[5rem] h-[5rem] absolute -bottom-6 -right-6 rounded-full"
							/>
						</div>
					</div>
					<div className="mt-[3.25rem]">
						<div className="relative">
							<Image
								src={Abstract8}
								alt="Abstract Image 8"
								className="w-[194px] h-[214px] rounded-xl"
							/>
							<Image
								src={Artist6}
								alt="Artist Image 6"
								className="w-[5rem] h-[5rem] absolute -bottom-6 -right-6 rounded-full"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<div className="">
						<div className="relative">
							<Image
								src={Abstract7}
								alt="Abstract Image 7"
								className="w-[15rem] h-[16.5625rem] rounded-xl"
							/>
							<Image
								src={Artist6}
								alt="Artist Image 6"
								className="w-[5rem] h-[5rem] absolute -bottom-6 -right-6 rounded-full"
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className={`${integralCF.className} font-bold text-[2rem]`}>
					Create and sell your NFTs
				</h2>
				<p className="mt-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
					phasellus placerat a pellentesque tellus sed egestas. Et tristique
					dictum sit tristique sed non. Lacinia lorem id consectetur pretium
					diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
				</p>
				<Button className={'mt-8'}>Sign Up Now</Button>
			</div>
		</section>
	);
};

export default CallToAction;
