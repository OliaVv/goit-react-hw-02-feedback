import PropTypes from 'prop-types';
import { HeaderSection, HeaderTitle } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <HeaderSection>
      <HeaderTitle>{title}</HeaderTitle>
      {children}
    </HeaderSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
