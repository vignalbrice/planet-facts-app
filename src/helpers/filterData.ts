import data from "../constants/data.json";

export const filterData = (name: string) => {
  return data.filter((el) => el.name === name)[0];
};

export const getData = () => data;
