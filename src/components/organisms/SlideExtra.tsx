import { ButtomMobile, ButtonRimac, LabelRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { InputForm, QuestionRimac, RadioCollection } from '../molecules';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';
import { optionResult, optionYN } from '../../constants';

export const SlideExtra = () => {
  const { saveFormData, formData } = useFormData();
  const { nextQuestion, indexExtra, setExtra } = useStepProgress();
  const schema = yup.object().shape({
    [formData.selectedDiagnoses[indexExtra].value + '-center']: yup
      .string()
      .typeError('Debes ingresar un centro de atención')
      .required('Debes ingresar un centro de atención'),
    [formData.selectedDiagnoses[indexExtra].value + '-surgeon']: yup
      .string()
      .required('Debes seleccionar una opción'),
    [formData.selectedDiagnoses[indexExtra].value + '-result']: yup
      .string()
      .required('Debes seleccionar una opción'),
  });
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      [formData.selectedDiagnoses[indexExtra].value + '-surgeon']:
        formData[formData.selectedDiagnoses[indexExtra].value + '-surgeon'] ||
        '',
      [formData.selectedDiagnoses[indexExtra].value + '-result']:
        formData[formData.selectedDiagnoses[indexExtra].value + '-result'] ||
        '',

      [formData.selectedDiagnoses[indexExtra].value + '-center']:
        formData[formData.selectedDiagnoses[indexExtra].value + '-center'] ||
        '',
    },
  });

  const onSubmit = () => {
    saveFormData(getValues());
    console.log('indexExtra', indexExtra);
    console.log(
      'formData.selectedDiagnoses.length ',
      formData.selectedDiagnoses.length,
    );

    if (formData.selectedDiagnoses.length > indexExtra + 1) {
      setExtra(indexExtra + 1);
    }
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  console.log('errors', errors);
  console.log(
    'formData.selectedDiagnoses[indexExtra].value',
    formData.selectedDiagnoses[indexExtra].value,
  );
  return (
    <div className='flex flex-row items-center justify-start w-4/5 gap-4 py-25 md:py-10  md:h-screen min-h-screen max-h-fit md:overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start   gap-8 w-full'>
        <LabelRimac
          size='text-3xl'
          text=''
          special={formData.selectedDiagnoses[indexExtra].label}
        ></LabelRimac>
        <QuestionRimac className='ms-5 w-2/3'>
          <QuestionRimac.Label
            size={textLabel}
            text='Centro de atención'
          ></QuestionRimac.Label>

          <InputForm
            {...{ control }}
            name={formData.selectedDiagnoses[indexExtra].value + '-center'}
            type='text'
            message={
              typeof errors[
                formData.selectedDiagnoses[indexExtra].value + '-center'
              ]?.message === 'string'
                ? (errors[
                    formData.selectedDiagnoses[indexExtra].value + '-center'
                  ]?.message as string)
                : undefined
            }
            placeholder='Centro de atención'
            className='w-full'
          />
        </QuestionRimac>
        <QuestionRimac className='ms-5'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Se ha operado?'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name={formData.selectedDiagnoses[indexExtra].value + '-surgeon'}
            itemOptions={optionYN}
            message={
              typeof errors[
                formData.selectedDiagnoses[indexExtra].value + '-surgeon'
              ]?.message === 'string'
                ? (errors[
                    formData.selectedDiagnoses[indexExtra].value + '-surgeon'
                  ]?.message as string)
                : undefined
            }
          />
        </QuestionRimac>
        <QuestionRimac className='ms-5'>
          <QuestionRimac.Label
            size={textLabel}
            text='Estado actual'
          ></QuestionRimac.Label>
          <RadioCollection
            {...{ control }}
            name={formData.selectedDiagnoses[indexExtra].value + '-result'}
            itemOptions={optionResult}
            message={
              typeof errors[
                formData.selectedDiagnoses[indexExtra].value + '-result'
              ]?.message === 'string'
                ? (errors[
                    formData.selectedDiagnoses[indexExtra].value + '-result'
                  ]?.message as string)
                : undefined
            }
          />
        </QuestionRimac>

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
