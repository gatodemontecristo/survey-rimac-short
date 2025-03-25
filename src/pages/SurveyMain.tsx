import { motion, AnimatePresence } from 'framer-motion';

import { useStepProgress } from '../store';
import {
  ButtonRimac,
  SlideExtra,
  SlideFeedback,
  SlideFinish,
  SlideInformation01,
  SlideInformation02,
  SlideInformation03,
  SlideInformation04,
  SlideInformation05,
  SlideInformation06,
  SlideInformation07,
  SlideInformation08,
  SlideInformation09,
  SlideInformation10,
  SlideInformation11,
  SlideInformation12,
  SlideInformation13,
  SlideSuccess01,
  SlideSuccess02,
  SlideSuccess03,
} from '../components';
import { SlideIntroduction } from '../components';
import { ReactNode } from 'react';

const componentMap: Record<string, ReactNode> = {
  SlideIntroduction: <SlideIntroduction />,
  SlideInformation01: <SlideInformation01 />,
  SlideInformation02: <SlideInformation02 />,
  SlideInformation03: <SlideInformation03 />,
  SlideInformation04: <SlideInformation04 />,
  SlideInformation05: <SlideInformation05 />,
  SlideInformation06: <SlideInformation06 />,
  SlideInformation07: <SlideInformation07 />,
  SlideInformation08: <SlideInformation08 />,
  SlideInformation09: <SlideInformation09 />,
  SlideInformation10: <SlideInformation10 />,
  SlideInformation11: <SlideInformation11 />,
  SlideInformation12: <SlideInformation12 />,
  SlideInformation13: <SlideInformation13 />,
  SlideSuccess01: <SlideSuccess01 />,
  SlideSuccess02: <SlideSuccess02 />,
  SlideSuccess03: <SlideSuccess03 />,
  SlideExtra: <SlideExtra />,
  SlideFeedback: <SlideFeedback />,
  SlideFinish: <SlideFinish />,
};
export const SurveyMain = () => {
  const { backQuestion, indexSlide, slides, step } = useStepProgress();
  const sum = Object.keys(slides).length - 19;

  const getComponentByIndex = () => {
    const componentName = slides[step];
    return componentMap[componentName] || null;
  };

  return (
    <div className='md:h-screen w-full md:w-3/4 flex justify-center items-center  bg-rimac-red'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={indexSlide}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className=' flex relative justify-center items-center w-full h-full  bg-rimac-white ps-0 md:ps-10'
        >
          <img
            src='../rimac-signature.svg'
            alt='logo'
            className='absolute top-5 right-5 w-16 md:w-20'
          ></img>
          {step !== 0 && step !== 18 + sum && (
            <div className='md:py-10 py-5 absolute top-0 md:left-20 left-5 w-auto'>
              <ButtonRimac isNav={true} fnClick={backQuestion}></ButtonRimac>
            </div>
          )}
          {getComponentByIndex() || <div>No se encontró</div>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
