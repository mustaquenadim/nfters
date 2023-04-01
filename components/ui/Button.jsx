import { DMSans } from '@/assets/fonts';

const Button = ({ children, className = '', variant, size, ...props }) => {
	return (
		<button
			className={`btn ${DMSans.variable} font-dm-sans ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
