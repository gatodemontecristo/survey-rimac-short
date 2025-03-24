import { InputForm, QuestionRimac } from '../molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtomMobile, ButtonRimac } from '../atoms';
import clsx from 'clsx';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

export const SlideInformation03 = () => {
  const { saveFormData, formData } = useFormData();
  const schema = yup.object().shape({
    heigh: yup.string().required('Debes ingresar tu talla (CM)'),
    weigh: yup.string().required('Debes ingresar tu peso (KG)'),
  });
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      heigh: formData.heigh || '',
      weigh: formData.weigh || '',
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
    <div
      className={clsx(
        'flex flex-row justify-center w-4/5 gap-4 py-18 md:py-20 items-center md:h-screen  min-h-[85vh] max-h-fit md:overflow-y-scroll custom-scrollbar',
      )}
    >
      <div className='flex flex-col items-start justify-start md:text-justify text-start   gap-4 w-full'>
        <QuestionRimac className='mb-4 w-3/4'>
          <QuestionRimac.Label
            size={textLabel}
            text='¿Cuál es tu talla y peso?'
          ></QuestionRimac.Label>
          <div className='flex flex-row items-start flex-wrap md:gap-4 gap-2'>
            <InputForm
              {...{ control }}
              name='heigh'
              message={
                typeof errors?.heigh?.message === 'string'
                  ? errors.heigh.message
                  : undefined
              }
              placeholder='Estatura (CM)'
              className='md:w-[40%] w-[75%]'
            />
            <InputForm
              {...{ control }}
              name='weigh'
              message={
                typeof errors?.weigh?.message === 'string'
                  ? errors.weigh.message
                  : undefined
              }
              placeholder='Peso (KG)'
              className='md:w-[40%] w-[75%]'
            />
          </div>
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
