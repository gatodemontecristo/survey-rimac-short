import { create } from 'zustand';
import { StepCircleProps } from '../types';
import { persist } from 'zustand/middleware';

export interface useStepProgressState {
  stepProgress: StepCircleProps[];
  step: number;
  slides: { [key: number]: string };
  indexSlide: number;
  indexExtra: number;
  originalSlides: { [key: number]: string } | null;
}
const initialState: useStepProgressState = {
  stepProgress: [
    {
      title: 'Sobre ti',
      state: 'active',
      img: '../icons/svgexport-118.svg',
    },
    {
      title: 'Hábitos',
      state: 'inactive',
      img: '../icons/svgexport-8.svg',
    },
    {
      title: 'Salud',
      state: 'inactive',
      img: '../icons/svgexport-2.svg',
    },
    {
      title: 'Antecendetes',
      state: 'inactive',
      img: '../icons/svgexport-247.svg',
    },
  ],
  step: 0,
  slides: {
    0: 'SlideIntroduction',
    1: 'SlideInformation01',
    2: 'SlideInformation02',
    3: 'SlideInformation03',
    4: 'SlideSuccess01',
    5: 'SlideInformation04',
    6: 'SlideInformation05',
    7: 'SlideInformation06',
    8: 'SlideInformation07',
    9: 'SlideSuccess02',
    10: 'SlideInformation08',
    11: 'SlideInformation09',
    12: 'SlideSuccess03',
    13: 'SlideInformation10',
    14: 'SlideInformation11',
    15: 'SlideInformation12',
    16: 'SlideInformation13',
    17: 'SlideFinish',
  },
  indexSlide: 0,
  indexExtra: 0,

  originalSlides: null,
};
export interface useStepProgressAction {
  actionStep: (isMore: boolean) => void;
  setIndexSlide: (indexSlide: number) => void;
  nextQuestion: () => void;
  backQuestion: () => void;
  addSlide: (pages: number) => void;
  removeSlide: () => void;
  resetStepProgress: () => void;
  setExtra: (indexExtra: number) => void;
}

export const useStepProgress = create(
  persist<useStepProgressState & useStepProgressAction>(
    (set, get) => ({
      ...initialState,
      actionStep: (isMore) => {
        const { slides } = get();
        const sum = Object.keys(slides).length - 18;

        const valor = isMore ? get().step + 1 : get().step - 1;
        set({ step: valor });
        set({
          stepProgress: [
            {
              title: 'Sobre ti',
              state: valor < 4 ? 'active' : 'completed',
              img: '../icons/svgexport-118.svg',
            },
            {
              title: 'Hábitos',
              state:
                valor >= 4 ? (valor < 9 ? 'active' : 'completed') : 'inactive',
              img: '../icons/svgexport-8.svg',
            },
            {
              title: 'Salud',
              state:
                valor >= 9
                  ? valor < 12 + sum
                    ? 'active'
                    : 'completed'
                  : 'inactive',
              img: '../icons/svgexport-2.svg',
            },
            {
              title: 'Antecendetes',
              state:
                valor >= 12 + sum
                  ? valor < 17 + sum
                    ? 'active'
                    : 'completed'
                  : 'inactive',
              img: '../icons/svgexport-247.svg',
            },
          ],
        });
      },
      setIndexSlide: (indexSlide) => {
        set({ indexSlide });
      },
      nextQuestion: () => {
        const { step, setIndexSlide, actionStep } = get();
        actionStep(true);
        setIndexSlide(step + 1);
      },
      backQuestion: () => {
        const {
          step,
          setIndexSlide,
          indexSlide,
          actionStep,
          slides,
          indexExtra,
          setExtra,
        } = get();
        if (step > 0) {
          Object.keys(slides).length > 18 &&
            indexExtra !== 0 &&
            10 + indexExtra >= indexSlide - 1 &&
            setExtra(indexExtra - 1);
          actionStep(false);
          setIndexSlide(step - 1);
        }
      },

      addSlide: (pages: number) => {
        const { slides, setIndexSlide } = get();
        set({ originalSlides: { ...slides } });
        setIndexSlide(pages);
        const updatedSlides = { ...slides };

        for (let i = Object.keys(updatedSlides).length - 1; i >= 11; i--) {
          updatedSlides[i + pages] = updatedSlides[i];
        }
        for (let i = 0; i < pages; i++) {
          updatedSlides[11 + i] = 'SlideExtra';
        }
        set({ slides: updatedSlides });
      },
      removeSlide: () => {
        const { originalSlides, setExtra } = get();
        if (originalSlides) {
          setExtra(0);
          set({ slides: originalSlides });
        }
      },
      resetStepProgress: () => {
        set(initialState);
        localStorage.removeItem('step-progress-2');
      },
      setExtra: (indexExtra) => {
        set({ indexExtra });
      },
    }),
    {
      name: 'step-progress-2',
    },
  ),
);
