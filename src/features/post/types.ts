export type Car = {
  id: number;
  name: string;
  link?: string;
};

export type Model = {
  id: number;
  name: string;
  link?: string;
  parent_id?: number;
};

export type Param = {
  id: number;
  length1: string;
  length2: string;
  length3: string;
  fasten: string;
  parent_id?: number;
};

export const isCar = (item: any): item is Car => {
  return item && typeof item.id === 'number' && typeof item.name === 'string' && typeof item.link === 'string';
};

export const isModel = (item: any): item is Model => {
  return (
    item &&
    typeof item.id === 'number' &&
    typeof item.name === 'string' &&
    typeof item.link === 'string' &&
    typeof item.parent_id === 'number'
  );
};

export const isParam = (item: any): item is Param => {
  return (
    item &&
    typeof item.id === 'number' &&
    typeof item.length1 === 'string' &&
    typeof item.length2 === 'string' &&
    typeof item.length3 === 'string' &&
    typeof item.fasten === 'string' &&
    typeof item.parent_id === 'number'
  );
};
