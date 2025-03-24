import { ButtomMobile, ButtonAdd, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ItemCollection, QuestionRimac, SelectRimac } from '../molecules';
import { anotherOptions } from '../../constants';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { ItemOption } from '../../types';
import { Notyf } from 'notyf';

const schema = yup.object().shape({
  additionalDiag: yup.object({
    label: yup.string(),
    value: yup.string(),
  }),
  selectedDiagnoses: yup
    .array()
    .min(1, 'Debes añadir al menos un diagnóstico')
    .required('Debes añadir al menos un diagnóstico'),
});

export const SlideInformation08 = () => {
  const { saveFormData, formData, removeSpecificFields } = useFormData();
  const [selectedDiagnoses, setSelectedDiagnoses] = useState<ItemOption[]>(
    formData.selectedDiagnoses || [],
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      additionalDiag: undefined,
      selectedDiagnoses: formData.selectedDiagnoses || [],
    },
  });
  const notyf = new Notyf();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  const { nextQuestion, addSlide, removeSlide } = useStepProgress();

  const handleAddDiagnosis = () => {
    const selectedDiagnosis = getValues('additionalDiag');
    const collectionDiagnosis = getValues('selectedDiagnoses');

    if (!selectedDiagnosis) {
      notyf.error({
        message: 'Debe seleccionar un diagnóstico',
      });
      return;
    }
    if (
      collectionDiagnosis.some((item) => item.value === selectedDiagnosis.value)
    ) {
      notyf.error({
        message: 'El diagnóstico ya ha sido seleccionado',
      });
      return;
    }
    const updatedDiagnoses = [...collectionDiagnosis, selectedDiagnosis];
    setSelectedDiagnoses(updatedDiagnoses);
    setValue('selectedDiagnoses', updatedDiagnoses);
    removeSlide();
  };

  const handleRemoveDiagnosis = (diagnosis: ItemOption) => {
    const updatedDiagnoses = selectedDiagnoses.filter((d) => d !== diagnosis);
    setSelectedDiagnoses(updatedDiagnoses);
    setValue('selectedDiagnoses', updatedDiagnoses);
    removeSlide();
  };

  const onSubmit = () => {
    removeSpecificFields();
    addSlide(selectedDiagnoses.length);
    saveFormData(getValues());
    nextQuestion();
  };
  return (
    <div className='flex flex-row items-center justify-start w-4/5 gap-4 md:py-10 py-20 md:pr-15 pr-0 md:h-screen min-h-screen max-h-fit md:overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start gap-4 w-full'>
        <QuestionRimac className='w-full'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Padeces o padeciste alguna enfermedad que requiera o haya requerido medicación o tratamiento? De ser el caso por favor brindanos más detalle'
          ></QuestionRimac.Label>
          <div className='flex flex-row gap-4'>
            <SelectRimac
              {...{ control }}
              name='additionalDiag'
              itemOptions={anotherOptions}
              message={
                typeof errors?.additionalDiag?.message === 'string'
                  ? errors.additionalDiag.message
                  : undefined
              }
              placeholder='Selecciona un diagnóstico'
            ></SelectRimac>
            {isMobile ? (
              <ButtonAdd fnClick={handleAddDiagnosis}></ButtonAdd>
            ) : (
              <ButtonRimac
                text='Añadir'
                fnClick={handleAddDiagnosis}
              ></ButtonRimac>
            )}
          </div>
        </QuestionRimac>
        <ItemCollection
          message={
            typeof errors?.selectedDiagnoses?.message === 'string'
              ? errors.selectedDiagnoses.message
              : undefined
          }
          diagnoses={selectedDiagnoses}
          fnRemove={handleRemoveDiagnosis}
        ></ItemCollection>

        <div className='md:flex hidden flex-row justify-end w-full md:mt-10 mt-5'>
          <ButtonRimac
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtonRimac>
        </div>
        <div className='bottom-0 left-0 fixed flex md:hidden flex-row justify-center w-full'>
          <ButtomMobile
            text='Siguiente'
            fnClick={handleSubmit(onSubmit)}
          ></ButtomMobile>
        </div>
      </div>
    </div>
  );
};
