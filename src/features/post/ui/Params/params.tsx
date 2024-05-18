import { CircularProgress } from '@mui/material';
import { useFetch } from 'features/hooks/useFetch';
import { isParam } from 'features/post/types';
import styles from './params.module.css';

interface ParamProps {
  idForFetch: number;
}

const Params = ({ idForFetch }: ParamProps) => {
  const param = useFetch(`/param/${idForFetch}`);
  console.log(param);

  const Aparam =
    Array.isArray(param) && param.every(isParam) ? (
      param.map((param, index) => (
        <div key={index} className={styles.text_container}>
          <span>Длина щетки со стороны водителя (см) - {param.length1}</span> <br />
          <span>Длина щетки со стороны пассажира (см) -{param.length2}</span> <br />
          <span>Длина задней щетки (см) - {param.length3}</span> <br />
          <span>Тип крепления - {param.fasten}</span>
        </div>
      ))
    ) : (
      <>
        <br /> <CircularProgress />
      </>
    );
  return <ul>{Aparam}</ul>;
};

export default Params;
