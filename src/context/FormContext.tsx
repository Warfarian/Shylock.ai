import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  collector_name: string;
  friend_name: string;
  phone_number: string;
  amount: string;
  reason: string;
  time_since: string;
  tone: {
    serious: number;
    aggressive: number;
    guilt: number;
  };
}

interface FormContextType {
  isFormOpen: boolean;
  setIsFormOpen: (open: boolean) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
  updateFormField: (field: string, value: any) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    collector_name: '',
    friend_name: '',
    phone_number: '',
    amount: '',
    reason: '',
    time_since: '',
    tone: {
      serious: 50,
      aggressive: 20,
      guilt: 30,
    },
  });

  const updateFormField = (field: string, value: any) => {
    if (field.startsWith('tone.')) {
      const toneField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        tone: {
          ...prev.tone,
          [toneField]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <FormContext.Provider value={{
      isFormOpen,
      setIsFormOpen,
      formData,
      setFormData,
      updateFormField,
    }}>
      {children}
    </FormContext.Provider>
  );
};