import { useState } from "react";

export const useForm = <T extends Record<string, unknown>>(
  initialValues: T
) => {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const onChange = (value: string, field: keyof T) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    // getters
    ...formValues,
    formValues,

    // methods
    onChange,
  };
};
