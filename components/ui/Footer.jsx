import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className="container">
			<div className="grid md:grid-cols-6 grid-cols-1">
				<div className="md:col-span-2 col-span-1">
					<div>NFters</div>
					<p>
						The world’s first and largest digital marketplace for crypto
						collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
						exclusive digital items.
					</p>
				</div>
				<div>
					<div>Market Place</div>
					<ul>
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
				<div>
					<ul>
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
				<div className="col-span-2">
					<div>Stay in the loop</div>
					<p>
						Join our mailing list to stay in the loop with our newest feature
						releases, NFT drops, and tips and tricks for navigating NFTs.
					</p>
				</div>
			</div>
			<p className="text-center">
				Copyright © {new Date().getFullYear()} Mustaque Nadim
			</p>
		</footer>
	);
};

export default Footer;
