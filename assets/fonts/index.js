import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google';

export const DMSans = DM_Sans({
	subsets: ['latin-ext'],
	weight: ['400', '500', '700'],
	variable: '--font-dm-sans',
});

export const integralCF = localFont({
	src: [
		{
			path: './integral-cf/integral-cf-regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './integral-cf/integral-cf-medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './integral-cf/integral-cf-demibold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './integral-cf/integral-cf-bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
});
