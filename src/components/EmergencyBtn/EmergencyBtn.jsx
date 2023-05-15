import PropTypes from 'prop-types';
import { EmergencyButton } from './EmergencyBtn.styled';

export const EmergencyBtn = ({title, onClick}) => {
  return <EmergencyButton onClick={onClick} type="button">{title}</EmergencyButton>;
};

EmergencyBtn.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}