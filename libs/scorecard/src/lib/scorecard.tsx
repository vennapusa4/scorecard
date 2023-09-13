import styles from './scorecard.module.scss';

/* eslint-disable-next-line */
export interface ScorecardProps {}

export function Scorecard(props: ScorecardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Scorecard!</h1>
    </div>
  );
}

export default Scorecard;
