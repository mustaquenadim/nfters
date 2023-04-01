import { DMSans } from '@/assets/fonts';
import classNames from 'classnames';

const Button = ({
	type = 'button',
	IconOnly,
	LeadingIcon,
	children,
	className = '',
	variant = 'primary',
	disabled = false,
	size = 'md',
	isLoading,
	...props
}) => {
	return (
		<button
			type={type}
			className={classNames(
				`${className} btn ${!disabled && `btn-${variant}`} btn-${size} ${
					DMSans.variable
				} font-dm-sans`,
				{
					'pointer-events-none': isLoading,
				},
				{ 'pointer-events-none btn-disabled': disabled }
			)}
			{...props}
		>
			{IconOnly ? <IconOnly {...IconOnly.props} /> : null}
			{LeadingIcon ? <LeadingIcon {...LeadingIcon.props} /> : null}
			{children}
		</button>
	);
};

export default Button;
