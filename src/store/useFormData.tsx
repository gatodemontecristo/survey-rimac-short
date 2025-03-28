import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useFormDataState {
  formData: Record<any, any>;
}
const initialState: useFormDataState = {
  formData: {},
};
interface useFormDataAction {
  saveFormData: (data: Record<any, any>) => void;
  resetForm: () => void;
  removeSpecificFields: () => void;
}

export const useFormData = create(
  persist<useFormDataState & useFormDataAction>(
    (set) => ({
      ...initialState,
      saveFormData: (data) => {
        set((state) => {
          const updatedFormData = { ...state.formData, ...data };
          localStorage.setItem('formData', JSON.stringify(updatedFormData));
          return { formData: updatedFormData };
        });
      },
      resetForm: () => {
        set(initialState);
        localStorage.removeItem('form-survey-2');
      },
      removeSpecificFields: () => {
        set((state) => {
          const updatedFormData = Object.keys(state.formData)
            .filter(
              (key) =>
                !key.includes('center') &&
                !key.includes('surgeon') &&
                !key.includes('date') &&
                !key.includes('result'),
            )
            .reduce(
              (acc, key) => {
                acc[key] = state.formData[key];
                return acc;
              },
              {} as Record<any, any>,
            );

          localStorage.setItem('formData', JSON.stringify(updatedFormData));
          return { formData: updatedFormData };
        });
      },
    }),
    {
      name: 'form-survey-2',
    },
  ),
);
