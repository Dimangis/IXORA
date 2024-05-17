import { Car } from '../../model/types';
import styles from './post.module.css';

type CarProps = {
  car: Car;
};

export const PostCard = ({ car }: CarProps) => {
  return (
    <div className={styles.postCard}>
      <h2>{car.name}</h2>
    </div>
  );
};
