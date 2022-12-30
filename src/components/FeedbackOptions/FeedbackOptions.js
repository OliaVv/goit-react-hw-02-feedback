import PropTypes from 'prop-types';
import {
  ButtonWrap,
  FeedbackButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, getFeedback }) => {
  const keys = Object.keys(options);

  const newOptions = keys.map(option => ({
    name: option,
  }));
  return (
    <>
      <ButtonWrap>
        {newOptions.map(({ name }) => (
          <FeedbackButton
            key={name}
            type="button"
            name={name}
            onClick={getFeedback}
          >
            {name}
          </FeedbackButton>
        ))}
      </ButtonWrap>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  getFeedback: PropTypes.func.isRequired,
};
