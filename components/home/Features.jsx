import { DMSans, integralCF } from '@/assets/fonts';
import Image from 'next/image';
import CardTick from '@/assets/icons/card-tick.svg';
import ChartSquare from '@/assets/icons/chart-square.svg';

const Features = () => {
	return (
		<section className="h-[20.375rem] flex items-center">
			<div className="container flex items-start justify-between">
				<div>
					<h2
						className={`w-[24.875rem] ${integralCF.className} font-bold text-[1.75rem]`}
					>
						The amazing NFT art of the world here
					</h2>
				</div>
				<div className="flex">
					<div className="w-[18.75rem] flex items-start">
						<div>
							<Image src={CardTick} alt="Card Tick Icon" />
						</div>
						<div>
							<h3
								className={`${DMSans.variable} font-dm-sans font-bold text-[1.25rem]`}
							>
								Fast Transaction
							</h3>
							<p className={`${DMSans.variable} font-dm-sans text-sm`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								etiam viverra tellus imperdiet.
							</p>
						</div>
					</div>
					<div className="w-[18.75rem] flex items-start">
						<div>
							<Image src={ChartSquare} alt="Chart Square Icon" />
						</div>
						<div>
							<h3
								className={`${DMSans.variable} font-dm-sans font-bold text-[1.25rem]`}
							>
								Fast Transaction
							</h3>
							<p className={`${DMSans.variable} font-dm-sans text-sm`}>
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
