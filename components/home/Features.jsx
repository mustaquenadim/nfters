import { DMSans, integralCF } from '@/assets/fonts';
import Image from 'next/image';
import CardTick from '@/assets/icons/CardTick';
import ChartSquare from '@/assets/icons/ChartSquare';

const Features = () => {
	return (
		<section className="h-[20.375rem] flex items-center bg-[#D9E0EC] bg-opacity-20">
			<div className="container flex items-start justify-between space-x-[5.375rem]">
				<div>
					<h2
						className={`w-[24.875rem] ${integralCF.className} font-bold text-[1.75rem]`}
					>
						The amazing NFT art of the world here
					</h2>
				</div>
				<div className="grid grid-cols-2 gap-[0.9375rem]">
					<div className="flex items-start space-x-[0.9375rem]">
						<div className="w-9 h-9">
							<CardTick />
						</div>
						<div>
							<h3
								className={`${DMSans.variable} font-dm-sans font-bold text-[1.25rem]`}
							>
								Fast Transaction
							</h3>
							<p
								className={`${DMSans.variable} font-dm-sans text-sm text-[#696969] mt-3`}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								etiam viverra tellus imperdiet.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-[0.9375rem]">
						<div>
							<ChartSquare className="w-9 h-9" />
						</div>
						<div>
							<h3
								className={`${DMSans.variable} font-dm-sans font-bold text-[1.25rem]`}
							>
								Fast Transaction
							</h3>
							<p
								className={`${DMSans.variable} font-dm-sans text-sm text-[#696969] mt-3`}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								etiam viverra tellus imperdiet.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
