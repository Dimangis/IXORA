import React, { useEffect } from 'react';
import { PageWrapper } from './features/page-wrapper';
import { PostCard } from './features/post/ui/PostCard';
import { useFetch } from 'features/hooks/useFetch';
import styles from './app.module.css';

export const App = () => {
  const cars = useFetch('/auto');
  useEffect(() => {}, [cars]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // const filteredPost = Acars.filter(cars => cars.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    // setPosts(filteredPost);
  };
  const Acars = Array.isArray(cars) ? (
    cars.map((cars, index) => (
      <li key={index}>
        <PostCard car={cars} />
      </li>
    ))
  ) : (
    <h2>ERROR</h2>
  );
  return (
    <PageWrapper onSearch={handleSearch}>
      <h1>IXORA</h1>
      <ul className={styles.list}>{Acars}</ul>
    </PageWrapper>
  );
};
