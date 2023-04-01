import { integralCF } from '@/assets/fonts';
import Image from 'next/image';

import Abstract1 from '@/assets/images/abstract-1.jpg';
import Abstract2 from '@/assets/images/abstract-2.jpg';
import Abstract3 from '@/assets/images/abstract-3.jpg';
import Abstract4 from '@/assets/images/abstract-4.jpg';
// import Abstract5 from '@/assets/images/abstract-5.jpg';
import Abstract6 from '@/assets/images/abstract-6.jpg';
import Abstract7 from '@/assets/images/abstract-7.jpg';
import Abstract8 from '@/assets/images/abstract-8.jpg';
import Abstract9 from '@/assets/images/abstract-9.jpg';
import Artist1 from '@/assets/images/artist-1.png';
import Button from '../ui/Button';

const FeaturedCollection = () => {
	return (
		<section className="pt-[4.0625rem] pb-[5.9375rem] bg-[#D9E0EC] bg-opacity-20">
			<div className="container">
				<h2
					className={`${integralCF.className} font-bold text-[1.75rem] leading-[2.1rem]`}
				>
					Collection Featured NFTs
				</h2>
				<div className="mt-[3.4375rem] grid grid-cols-3 gap-[1.9375rem]">
					<div className="space-y-7">
						<div className="grid grid-cols-[265px_minmax(103.59px,_1fr)] gap-2">
							<Image
								src={Abstract9}
								alt="Abstract Image "
								className="row-span-3 w-[265px] h-[272.27px]"
							/>
							<Image
								src={Abstract7}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
							<Image
								src={Abstract6}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
							<Image
								src={Abstract3}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold">Amazing Collection</h3>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2.5">
									<Image
										src={Artist1}
										alt="Artist Image 1"
										className="w-7 h-7 rounded-full"
									/>{' '}
									<div className="font-medium text-sm">by Arkhan</div>
								</div>
								<Button variant={'outlined'} size="xs">
									Total 54 Items
								</Button>
							</div>
						</div>
					</div>
					<div className="space-y-7">
						<div className="grid grid-cols-[265px_minmax(103.59px,_1fr)] gap-2">
							<Image
								src={Abstract9}
								alt="Abstract Image "
								className="row-span-3 w-[265px] h-[272.27px]"
							/>
							<Image
								src={Abstract7}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
							<Image
								src={Abstract6}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
							<Image
								src={Abstract3}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold">Amazing Collection</h3>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2.5">
									<Image
										src={Artist1}
										alt="Artist Image 1"
										className="w-7 h-7 rounded-full"
									/>{' '}
									<div className="font-medium text-sm">by Arkhan</div>
								</div>
								<Button variant={'outlined'} size="xs">
									Total 54 Items
								</Button>
							</div>
						</div>
					</div>
					<div className="space-y-7">
						<div className="grid grid-cols-[265px_minmax(103.59px,_1fr)] gap-2">
							<Image
								src={Abstract9}
								alt="Abstract Image "
								className="row-span-3 w-[265px] h-[272.27px]"
							/>
							<Image
								src={Abstract7}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
							<Image
								src={Abstract6}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
							<Image
								src={Abstract3}
								alt="Abstract Image "
								className="h-[85.26px] rounded-[0.6875rem]"
							/>
						</div>
						<div>
							<h3 className="text-xl font-bold">Amazing Collection</h3>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2.5">
									<Image
										src={Artist1}
										alt="Artist Image 1"
										className="w-7 h-7 rounded-full"
									/>{' '}
									<div className="font-medium text-sm">by Arkhan</div>
								</div>
								<Button variant={'outlined'} size="xs">
									Total 54 Items
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedCollection;
