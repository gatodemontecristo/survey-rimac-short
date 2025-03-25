import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { QuestionRimac, RadioCollection } from '../molecules';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';
import { optionNumber } from '../../constants';

const schema = yup.object().shape({
  rating: yup.string().required('Debes seleccionar una opción'),
});

export const SlideFeedback = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      rating: formData.rating || '',
    },
  });

  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    saveFormData(getValues());
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textLabel = isMobile ? 'text-xl' : 'text-2xl';
  return (
    <div className='flex flex-row items-center justify-start w-4/5 gap-4 py-20 md:py-10  md:h-screen  min-h-[85vh] max-h-fit md:overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col items-start justify-start md:text-justify text-start   gap-4 w-full'>
        <QuestionRimac className='mb-4 text-center'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Como calificarias tu experiencia llenando este formulario?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Elige del 1 al 5, considerando que 1 es la menor nota y 5 la mayor nota'></QuestionRimac.Info>
          <RadioCollection
            {...{ control }}
            name='rating'
            itemOptions={optionNumber}
            justifyOption='justify-center'
            message={
              typeof errors?.rating?.message === 'string'
                ? errors.rating.message
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
