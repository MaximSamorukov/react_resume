import react from "react"
import LinkedInIcon from './linkedin.svg';
import c from '../../components/styles/profile.module.scss';

export const LinkedinIcon = () => (
	<div className={c.profile_icon}>
		<img src={LinkedInIcon} alt="linkedin" />
	</div>
)
