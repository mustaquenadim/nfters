import Image from 'next/image';
import Abstract2 from '@/assets/images/abstract-2.jpg';
import Artist2 from '@/assets/images/artist-2.png';
import Artist3 from '@/assets/images/artist-3.png';
import Artist4 from '@/assets/images/artist-4.png';
import Artist5 from '@/assets/images/artist-5.png';
import EthereumIcon from '@/assets/icons/EthereumIcon';

const Card = () => {
	return (
		<div className="card bg-[#FFFFFF] border border-[#F2F2F280] rounded-[0.8228rem] p-[0.6544rem]">
			<div className="card-top relative">
				<Image
					src={Abstract2}
					alt="Abstract Image 2"
					className="rounded-[0.8225rem] overflow-hidden"
				/>
				<div className="flex items-center justify-start absolute -bottom-4 left-2">
					<Image src={Artist3} alt="Artist Image 3" className="" />
					<Image src={Artist2} alt="Artist Image 2" className="-ml-3" />
					<Image src={Artist4} alt="Artist Image 4" className="-ml-3" />
					<Image src={Artist5} alt="Artist Image 5" className="-ml-3" />
				</div>
			</div>
			<div className="card-body mt-[1.375rem]">
				<div className="text-xl font-bold">ArtCrypto</div>
				<div className="flex items-center justify-between mt-[0.5325rem]">
					<div className="flex items-center text-[#00AC4F] text-[0.6875rem] font-bold">
						<EthereumIcon className="w-[0.585rem] h-full mr-[0.3431rem]" />
						0.25 ETH
					</div>
					<div className="text-[13px] font-medium text-[#838383]">1 of 321</div>
				</div>
			</div>
			<div className="card-footer flex items-center justify-between mt-3.5">
				<button className="bg-[#F5F5F5] rounded-full cursor-default px-[0.6875rem] py-[0.2744rem] text-[#5539A8] text-[10.97px] font-bold">
					3h 50m 2s left
				</button>
				<button className="text-[#4F33A3] text-base font-medium">
					Place a bid
				</button>
			</div>
		</div>
	);
};

export default Card;
