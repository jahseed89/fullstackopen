import StatisticLine from "./StatisticLine";

const Statistic = (props) => {
  return (
    <div>
      <h1>statistic</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="nutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
    </div>

  );
};

export default Statistic;
