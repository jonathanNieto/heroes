import { ChangeEvent, useState } from 'react';

// export function useForm<T>(initialState: T) {
// export const useForm = <T extends Object>(initialState: T) => {
export const useForm = <T>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = () => {
    setFormValues(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return { formValues, handleInputChange, reset, ...formValues };
};
