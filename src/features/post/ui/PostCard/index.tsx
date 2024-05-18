import { useFetch } from 'features/hooks/useFetch';
import { Car, Model, isModel } from '../../types';
import styles from './post.module.css';
import { useEffect, useState } from 'react';
// import DropDown from '../DropDown/dropDown';
import AsyncSelect, { ModelSelected } from '../DropDown/dropDown';
import { CircularProgress } from '@mui/material';
import Modification from '../Modification/modification';

type CarProps = {
  car: Car;
};

export const PostCard = ({ car }: CarProps) => {
  // const [selectedOption, setSelectedOption] = useState<string>('');
  // const handleSelect = (value: string) => {
  //   setSelectedOption(value);
  //   console.log(`Selected: ${value}`);
  // // };
  // const models = useFetch(`/model/${car.id}`);
  // console.log(models);
  // const Amodels = Array.isArray(models) ? (
  //   models.map((models, index) => (
  //     <div key={index}>
  //       {' '}
  //       <DropDown options={models} onSelect={handleSelect} />
  //       {selectedOption && <p>Selected Option: {selectedOption}</p>}
  //     </div>
  //   ))
  // ) : (
  //   <span>ERROR</span>
  // );

  const [selectedOption, setSelectedOption] = useState<ModelSelected | null>(null);
  const model = useFetch(`/model/${car.id}`);
  if (Array.isArray(model) && model.every(isModel)) {
    const handleSelect = (option: ModelSelected | null) => {
      setSelectedOption(option);
    };

    return (
      <div className={styles.postCard}>
        <h2>{car.name}</h2>
        {/* <div>{Amodels}</div> */}
        <AsyncSelect data={model} onSelect={handleSelect} />
        {/* {selectedOption && <p>Selected Option: {selectedOption.label}</p>} */}
        {selectedOption && <Modification idForFetch={selectedOption.value} />}
      </div>
    );
  } else {
    return <CircularProgress />;
  }
};
