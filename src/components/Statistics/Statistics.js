import PropTypes from 'prop-types';
import {
  Stats,
  Title,
  List,
  Info,
} from 'components/Statistics/Statistics.styled';
export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  percentage,
}) => {
  return (
    <Stats>
      <Title>{title}</Title>
      <List>
        <li>
          <span>Good: </span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span>{bad}</span>
        </li>
      </List>
      <Info>
        <li>
          <span>Total: </span>
          <span>{total}</span>
        </li>
        <li>
          <span>Positive feedback: </span>

          <span>{percentage ? percentage : 0}%</span>
        </li>
      </Info>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
