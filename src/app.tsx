import React, { useEffect, useState } from 'react';
import { PageWrapper } from './features/page-wrapper';
import { PostCard } from './features/post/ui/PostCard';
import { useFetch } from 'features/hooks/useFetch';
import styles from './app.module.css';
import { Car, isCar } from 'features/post/types';
import { CircularProgress } from '@mui/material';

export const App = () => {
  const cars = useFetch('/auto');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => {
    if (Array.isArray(cars) && cars.every(isCar)) {
      setFilteredCars(cars);
    }
  }, [cars]);

  useEffect(() => {
    if (Array.isArray(cars) && cars.every(isCar)) {
      const filtered = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredCars(filtered);
    }
  }, [searchTerm, cars]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const Acars =
    Array.isArray(cars) && cars.every(isCar) ? (
      filteredCars.map((cars, index) => (
        <li key={index}>
          <PostCard car={cars} />
        </li>
      ))
    ) : (
      <>
        <li>
          <CircularProgress />
        </li>
        <li>
          <CircularProgress />
        </li>
        <li>
          <CircularProgress />
        </li>
      </>
    );
  return (
    <PageWrapper onSearch={handleSearch}>
      <h1>IXORA</h1>
      <ul className={styles.list}>{Acars}</ul>
    </PageWrapper>
  );
};
