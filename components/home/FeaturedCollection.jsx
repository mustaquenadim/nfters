import { integralCF } from '@/assets/fonts';
import React from 'react';

const FeaturedCollection = () => {
	return (
		<section>
			<div className="container">
				<h2
					className={`${integralCF.className} font-bold text-[1.75rem] leading-[2.1rem]`}
				>
					Collection Featured NFTs
				</h2>
			</div>
		</section>
	);
};

export default FeaturedCollection;
