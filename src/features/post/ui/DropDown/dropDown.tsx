import { useFetch } from 'features/hooks/useFetch';
import { Model } from 'features/post/types';
import React, { useCallback, useState } from 'react';
import Select from 'react-select/async';

export type ModelSelected = {
  label: string;
  value: string;
};

interface AsyncSelectProps {
  data: Model[];
  onSelect: (option: ModelSelected | null) => void;
}

const AsyncSelect: React.FC<AsyncSelectProps> = ({ data, onSelect }) => {
  // const data = useFetch(loadOptionsUrl) as Model[] | null;

  const loadOptions = useCallback(
    async (inputValue: string): Promise<{ label: string; value: string }[]> => {
      if (!data) {
        return [];
      }

      const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

      return filteredData.map((item: Model) => ({
        label: item.name,
        value: item.id.toString(),
      }));
    },
    [data],
  );

  return <Select cacheOptions onChange={onSelect as any} defaultOptions isClearable loadOptions={loadOptions} />;
};

export default AsyncSelect;
