import { DMSans, integralCF } from '@/assets/fonts';
import Image from 'next/image';
import CardTick from '@/assets/icons/CardTick';
import ChartSquare from '@/assets/icons/ChartSquare';

const Features = () => {
	return (
		<section className="pt-[7.625rem] pb-[6.0625rem] flex items-center bg-[#D9E0EC] bg-opacity-20">
			<div className="container flex lg:flex-row flex-col items-start justify-between lg:space-x-[5.375rem] space-y-7">
				<div>
					<h2
						className={`lg:w-[24.875rem] ${integralCF.className} lg:text-left text-center font-bold text-[1.75rem]`}
					>
						The amazing NFT art of the world here
					</h2>
				</div>
				<div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[0.9375rem] gap-7 m-auto">
					<div className="flex md:flex-row flex-col md:items-start md:text-left text-center md:space-x-[0.9375rem] sm:space-y-0 space-y-4 sm:w-full w-96 m-auto">
						<div className="md:m-0 m-auto">
							<CardTick className="w-9 h-9" />
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
					<div className="flex md:flex-row flex-col md:items-start justify-center md:text-left text-center md:space-x-[0.9375rem] sm:space-y-0 space-y-4">
						<div className="md:m-0 m-auto">
							<ChartSquare className="w-9 h-9" />
						</div>
						<div>
							<h3
								className={`${DMSans.variable} font-dm-sans font-bold text-[1.25rem]`}
							>
								Fast Transaction
							</h3>
							<p
								className={`${DMSans.variable} font-dm-sans text-sm text-[#696969] mt-3 sm:w-full w-96`}
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
