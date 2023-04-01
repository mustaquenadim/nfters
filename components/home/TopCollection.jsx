import Image from 'next/image';
import Abstract1 from '@/assets/images/abstract-1.jpg';
import Abstract9 from '@/assets/images/abstract-9.jpg';
import Artist1 from '@/assets/images/artist-1.png';
import Artist10 from '@/assets/images/artist-10.png';
import Button from '../ui/Button';
import EthereumIcon from '@/assets/icons/EthereumIcon';

const TopCollection = () => {
	return (
		<section className="container">
			<div className="flex">
				<div className="card w-[25rem] space-y-8">
					<Image src={Abstract9} alt="Abstract Image 9" />
					<div className="flex justify-between">
						<div className="flex items-start ">
							<Image src={Artist1} alt="Artist Image 1" />
							<div className="ml-2.5">
								<div className="font-bold text-xl">The Futr Abstr</div>
								<small className="mt-1 text-base leading-[1.125rem]">
									10 in the stock
								</small>
							</div>
						</div>
						<div className="flex flex-col">
							<small className="text-[0.75rem] font-medium leading-4">
								Highest Bid
							</small>
							<div className="flex items-center font-bold text-base mt-[0.4487rem]">
								<EthereumIcon className="mr-2.5" /> 0.25 ETH
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="flex">
						<div>
							<Image
								src={Abstract1}
								alt="Abstract Image 1"
								className="w-[147px] h-[147px] rounded-xl"
							/>
						</div>
						<div>
							<div className="font-bold text-xl">The Futr Abstr</div>
							<div className="flex items-center mt-2">
								<Image src={Artist1} alt="Artist Image 1" />{' '}
								<button className="p-2 border border-[#00AC4F] text-[#00AC4F] rounded-[0.375rem] flex items-center">
									<EthereumIcon /> 0.25 ETH
								</button>{' '}
								1 of 8
							</div>
							<Button className={'mt-4'}>Place a bid</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2>Top Collections over</h2>
				<p>Last 7 days</p>

				<div>
					<Image src={Artist10} alt="Artist Image 10" />
				</div>
			</div>
		</section>
	);
};

export default TopCollection;
