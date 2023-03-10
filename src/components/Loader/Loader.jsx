import { ThreeDots } from 'react-loader-spinner';
import s from 'components/Styles.module.css';

function Spinner() {
  return (
    <div className={s.Loader}>
      <ThreeDots
        strokeColor="blue"
        strokeWidth="4"
        animationDuration="1"
        width="196"
        visible={true}
      />
    </div>
  );
}

export default Spinner;
