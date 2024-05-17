import { useFetch } from 'features/hooks/useFetch';
import { Car } from '../../model/types';
import styles from './post.module.css';

type CarProps = {
  car: Car;
};

export const PostCard = ({ car }: CarProps) => {
  const models = useFetch(`/model/${car.id}`);
  console.log(models);
  const Amodels = Array.isArray(models) ? (
    models.map((models, index) => (
      <span key={index}>
        {models.name}
        <br />
      </span>
    ))
  ) : (
    <span>ERROR</span>
  );
  return (
    <div className={styles.postCard}>
      <h2>{car.name}</h2>
      <div>{Amodels}</div>
    </div>
  );
};
