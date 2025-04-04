import { ButtomMobile, ButtonRimac } from '../atoms';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { MultiCheckboxForm, QuestionRimac } from '../molecules';
import { optionMedicine } from '../../constants';
import { useFormData, useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

const schema = yup.object().shape({
  checkMedicine: yup
    .array()
    .of(yup.string())
    .min(1, 'Debes seleccionar al menos una opción'),
});
export const SlideInformation09 = () => {
  const { saveFormData, formData } = useFormData();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkMedicine: formData.checkMedicine || [],
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
      className='flex flex-row items-center justify-center w-4/5 gap-4 md:py-10 py-20 md:pr-15 pr-0 md:h-screen min-h-screen max-h-fit md:overflow-y-scroll  custom-scrollbar'
      style={{
        overflow: 'visible',
      }}
    >
      <div className='flex flex-col items-start justify-start md:text-justify text-start    gap-4 w-full '>
        <QuestionRimac className=' w-full '>
          <QuestionRimac.Label
            size={textLabel}
            text='En los últimos 10 años, ¿para cuáles de estas afecciones le ha diagnosticado o tratado un profesional médico autorizado?'
          ></QuestionRimac.Label>
          <QuestionRimac.Info text='Por favor seleccione todas las respuestas válidas.'></QuestionRimac.Info>
          <MultiCheckboxForm
            {...{ control }}
            name='checkMedicine'
            options={optionMedicine}
            message={errors?.checkMedicine?.message}
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
