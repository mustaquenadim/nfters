import Image from 'next/image';
import Abstract1 from '@/assets/images/abstract-1.jpg';
import Abstract9 from '@/assets/images/abstract-9.jpg';
import Artist1 from '@/assets/images/artist-1.png';
import Artist10 from '@/assets/images/artist-10.png';
import Button from '../ui/Button';
import EthereumIcon from '@/assets/icons/EthereumIcon';
import VerifiedBadge from '@/assets/icons/verified-badge.svg';
import { integralCF } from '@/assets/fonts';

const TopCollection = () => {
	return (
		<section className="container py-[8.375rem] flex md:flex-row flex-col md:justify-between md:space-y-0 space-y-9">
			{/* left */}
			<div className="card w-[25rem] space-y-8">
				<Image src={Abstract9} alt="Abstract Image 9" />
				<div className="flex justify-between">
					<div className="flex items-start ">
						<Image
							src={Artist1}
							alt="Artist Image 1"
							className="rounded-full"
						/>
						<div className="ml-2.5">
							<div className="font-bold text-xl">The Futr Abstr</div>
							<small className="mt-1 text-sm leading-[1.125rem] text-[#363639]">
								10 in the stock
							</small>
						</div>
					</div>
					<div className="flex flex-col text-[#3A3A3A]">
						<small className="text-[0.75rem] font-medium leading-4">
							Highest Bid
						</small>
						<div className="flex items-center font-bold text-base mt-[0.4487rem]">
							<EthereumIcon className="w-[0.7719rem] h-[1.3331rem] mr-2.5" />{' '}
							0.25 ETH
						</div>
					</div>
				</div>
			</div>
			{/* mid */}
			<div className="flex flex-col justify-between">
				{Array.from({ length: 3 }).map((_, index) => (
					<div key={index} className="flex space-x-5">
						<div>
							<Image
								src={Abstract1}
								alt="Abstract Image 1"
								className="w-[147px] h-[147px] rounded-xl"
							/>
						</div>
						<div>
							<div className="font-bold text-xl">The Futr Abstr</div>
							<div className="flex items-center mt-2 space-x-2.5">
								<div className="flex items-center space-x-2">
									<Image
										src={Artist1}
										alt="Artist Image 1"
										className="w-[2.125rem] h-[2.125rem] rounded-full"
									/>
									<button className="p-2 border border-[#00AC4F] text-[#00AC4F] text-sm font-bold rounded-[0.375rem] flex items-center">
										<EthereumIcon className="w-[0.5331rem] h-full mr-[0.3125rem]" />{' '}
										0.25 ETH
									</button>
								</div>
								<div className="text-sm text-[#757575]">1 of 8</div>
							</div>
							<Button variant="outlined" size="md" className={'mt-4'}>
								Place a bid
							</Button>
						</div>
					</div>
				))}
			</div>
			{/* right */}
			<div>
				<h2 className={`${integralCF.className} text-xl font-bold`}>
					Top Collections over
				</h2>
				<p className="text-[#3D00B7] font-bold text-lg mt-2.5">Last 7 days</p>

				<div className="mt-8 grid grid-cols-1 divide-y">
					{Array.from({ length: 5 }).map((_, index) => (
						<div
							key={index}
							className={`w-[19.5625rem] flex items-center space-x-[1.375rem] ${
								index === 0
									? 'pb-4'
									: index === 4
									? 'pt-4'
									: index > 0 && index < 5 && 'py-4'
							}`}
						>
							<div className="text-2xl font-bold">1</div>
							<div className="relative">
								<Image
									src={Artist10}
									alt="Artist Image 10"
									className="h-[60px] w-[60px] rounded-full"
								/>
								<Image
									src={VerifiedBadge}
									alt="Verified Badge"
									className="absolute -top-1 -right-1"
								/>
							</div>
							<div>
								<div className="text-base leading-[1.0212rem] font-medium -tracking-wide">
									CryptoFunks
								</div>
								<div className="flex items-center text-sm font-semibold -tracking-wide text-[#636363] mt-2.5">
									<EthereumIcon className="mr-[0.3987rem] text-black" />{' '}
									19,769.39
								</div>
							</div>
							<div className="text-[#14C8B0] font-semibold text-xl">
								+26.52%
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TopCollection;
