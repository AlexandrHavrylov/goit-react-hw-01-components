import PropTypes from 'prop-types';

import {
  StatisticSection,
  Title,
  Stats,
  Stat,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <Title>Upload stats</Title>}
      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <Stat key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Stat>
        ))}
      </Stats>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
