import { CircularProgress } from '@mui/material';
import { useFetch } from 'features/hooks/useFetch';
import { isModel } from 'features/post/types';
import styles from './modification.module.css';
import Params from '../Params/params';

interface ModificationProps {
  idForFetch: string;
}

const Modification = ({ idForFetch }: ModificationProps) => {
  const modif = useFetch(`/modif/${idForFetch}`);

  const Amodif =
    Array.isArray(modif) && modif.every(isModel) ? (
      modif.map((modif, index) => (
        <li key={index} className={styles.list_item}>
          <span>{modif.name}</span>
          <Params idForFetch={modif.id} />
        </li>
      ))
    ) : (
      <>
        <br /> <CircularProgress />
      </>
    );
  return <ul className={styles.list}>{Amodif}</ul>;
};

export default Modification;
