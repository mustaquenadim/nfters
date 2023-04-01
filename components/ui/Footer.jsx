import { DMSans, integralCF } from '@/assets/fonts';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Button from './Button';

const Footer = () => {
	return (
		<footer className={`container pt-20 pb-6 ${DMSans.variable} font-dm-sans`}>
			<div className="grid md:grid-cols-6 grid-cols-1 gap-[4rem]">
				<div className="md:col-span-2 col-span-1">
					<div className={`font-bold text-2xl ${integralCF.className}`}>
						NFters
					</div>
					<p className={`mt-6 text-sm text-[#565656] leading-[1.4rem]`}>
						The world’s first and largest digital marketplace for crypto
						collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
						exclusive digital items.
					</p>
					<div className="flex items-center space-x-4 mt-7">
						<div className="bg-[#3B5998] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
							<FaFacebookF className="text-white" />
						</div>
						<div className="bg-[#55ACEE] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
							<FaTwitter className="text-white" />
						</div>
						<div className="bg-[#007AB9] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
							<FaLinkedinIn className="text-white" />
						</div>
					</div>
				</div>
				<div className="space-y-7">
					<div className="text-lg font-bold">Market Place</div>
					<ul className="space-y-2 font-medium text-sm text-[#3D3D3D]">
						<li>
							<Link href="/">All NFTs</Link>
						</li>
						<li>
							<Link href="/">New</Link>
						</li>
						<li>
							<Link href="/">Art</Link>
						</li>
						<li>
							<Link href="/">Sports</Link>
						</li>
						<li>
							<Link href="/">Utility</Link>
						</li>
						<li>
							<Link href="/">Music</Link>
						</li>
						<li>
							<Link href="/">Domain Name</Link>
						</li>
					</ul>
				</div>
				<div className="space-y-7">
					<div className="text-lg font-bold">My Account</div>
					<ul className="space-y-2 font-medium text-sm text-[#3D3D3D]">
						<li>
							<Link href="/">Profile</Link>
						</li>
						<li>
							<Link href="/">Favorite</Link>
						</li>
						<li>
							<Link href="/">My Collections</Link>
						</li>
						<li>
							<Link href="/">Settings</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-2 space-y-6">
					<div className="text-lg font-bold">Stay in the loop</div>
					<p className="text-sm text-[#363639] leading-[1.4rem]">
						Join our mailing list to stay in the loop with our newest feature
						releases, NFT drops, and tips and tricks for navigating NFTs.
					</p>
					<div className="relative">
						<input
							type="email"
							placeholder="Enter your email address.."
							className="w-full h-[3.75rem] pl-6 rounded-full border-2 border-[#F1F1F1] outline-none"
						/>
						<Button className="absolute top-[5px] right-[5px]">
							Subscribe Now
						</Button>
					</div>
				</div>
			</div>
			<hr className="border border-[#F4F4F4] mt-16" />
			<p className="text-center mt-4 text-sm text-[#A4A4A4]">
				Copyright &copy; {new Date().getFullYear()} Mustaque Nadim
			</p>
		</footer>
	);
};

export default Footer;
