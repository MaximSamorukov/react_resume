import react from "react"
import PdfIcon from './pdf.svg';
import c from '../../components/styles/profile.module.scss';

export const PDFIcon = () => (
	<div className={c.profile_icon}>
		<img src={PdfIcon} alt="linkedin" />
	</div>
)
