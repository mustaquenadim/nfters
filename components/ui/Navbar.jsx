import Link from 'next/link';
import Button from './Button';
import { DMSans, integralCF } from '@/assets/fonts';
import SearchIcon from '@/assets/icons/search-icon.svg';
import Image from 'next/image';

const Navbar = () => {
	return (
		<>
			<nav className="container flex items-center justify-between h-[109px]">
				<div className="flex flex-row items-center justify-center">
					{/* brand logo */}
					<Link
						href="/"
						className={`${integralCF.className} font-bold text-[#3D00B7] text-2xl leading-7`}
					>
						NFTERS
					</Link>
					<div className="lg:ml-[4.125rem] md:ml-8 md:block hidden">
						<ul
							className={`flex items-center ${DMSans.variable} font-dm-sans lg:space-x-12 md:space-x-8`}
						>
							<li className="nav-item">Marketplace</li>
							<li className="nav-item">Resource</li>
							<li className="nav-item">About</li>
						</ul>
					</div>
				</div>
				<div className="flex items-center space-x-5">
					<div className="relative">
						<input
							type="search"
							placeholder="Search"
							className={`h-[3.125rem] border-2 border-[#EFEFEF] rounded-full max-w-[18.75rem] pl-[1.875rem] text-base ${DMSans.variable} font-dm-sans font-medium outline-none hidden lg:block`}
						/>
						<Image
							src={SearchIcon}
							alt="Search Icon"
							className="lg:absolute right-[20px] top-[14px]"
						/>
					</div>
					<Button variant="primary" className="!h-[3.125rem]">
						Upload
					</Button>
					<Button variant="outlined" className="!h-[3.125rem] px-5">
						Connect Wallet
					</Button>
				</div>
			</nav>
			<hr className="border-b border-[#EFEFEF]" />
		</>
	);
};

export default Navbar;
