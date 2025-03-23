import { ButtomMobile, ButtonRimac } from '../atoms';
import { QuestionRimac } from '../molecules';
import { useStepProgress } from '../../store';
import { useMediaQuery } from 'react-responsive';

export const SlideIntroduction = () => {
  const { nextQuestion } = useStepProgress();
  const onSubmit = () => {
    nextQuestion();
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textSize = isMobile ? 'text-2xl' : 'text-4xl';
  const textParagraph = isMobile ? 'text-lg' : 'text-xl';
  return (
    <div
      className='flex flex-col items-start z-1 justify-center text-justify gap-4 w-4/5 py-18 md:py-10 overflow-y-scroll custom-scrollbar
   '
    >
      <QuestionRimac className='mb-4'>
        <QuestionRimac.Label
          size={textSize}
          text='Conversemos'
          special='sobre tu salud'
        ></QuestionRimac.Label>
        <QuestionRimac.Info
          text='El propósito de este formulario es contar con información precisa sobre tu estado de salud para brindarte el mejor servicio en tu EPS Rimac. <br>Agradecemos llenes el formulario para cada una de las personas de tu familia que se encuentra dentro de tu EPS.'
          size={textParagraph}
        ></QuestionRimac.Info>
      </QuestionRimac>

      <div className='md:flex hidden flex-row justify-end w-full md:mt-10 mt-5'>
        <ButtonRimac text='Empecemos' fnClick={onSubmit}></ButtonRimac>
      </div>
      <div className='bottom-0 left-0 fixed flex md:hidden flex-row justify-center w-full'>
        <ButtomMobile text='Empecemos' fnClick={onSubmit}></ButtomMobile>
      </div>
    </div>
  );
};
