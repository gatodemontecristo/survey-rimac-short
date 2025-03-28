import { ItemOption, ItemOptionInfo } from '../types';

export const optionGender: ItemOption[] = [
  { value: 'F', label: 'Femenino' },
  { value: 'M', label: 'Masculino' },
  { value: 'P', label: 'Prefiero no responder' },
];

export const optionActivity: ItemOption[] = [
  { value: '1', label: '3 veces por semana o más' },
  { value: '2', label: 'Menos de 3 veces por semana' },
  { value: '3', label: 'No realizo actividad física' },
];

export const optionSleep: ItemOption[] = [
  { value: '1', label: 'Más de 6 horas al día' },
  { value: '2', label: 'Menos de 6 horas al día' },
];

export const optionCigarettes: ItemOption[] = [
  { value: '1', label: 'Más de 10 cigarrillos diarios' },
  { value: '2', label: 'Menos de 10 cigarrillos diarios' },
  { value: '3', label: 'No fumo' },
];

export const optionAlcohol: ItemOption[] = [
  {
    value: '1',
    label: 'Más de 2 copas diarias o más de 4 vasos por ocasión social',
  },
  {
    value: '2',
    label: 'Menos de 2 copas diarias o menos de 4 vasos por ocasión social',
  },
  { value: '3', label: 'No tomo' },
];

export const optionYN: ItemOption[] = [
  { value: 'Y', label: 'Sí' },
  { value: 'N', label: 'No' },
];

export const optionResult: ItemOption[] = [
  { value: '1', label: 'Resuelto' },
  { value: '2', label: 'No resuelto' },
];

export const optionMedicine: ItemOptionInfo[] = [
  {
    value: '1',
    label: 'Benzodiazepinas',
    info: 'Se toma para tratar la ansiedad, insomnio o similares. Por ejemplo: Valium, Xanax',
  },
  {
    value: '2',
    label: 'Antihipertensivos',
    info: 'Para tratar la presión arterial alta. Por ejemplo: Vasotec, Cozaar',
  },
  {
    value: '3',
    label: 'Antidiabéticos',
    info: 'Para controlar el nivel de azúcar en la sangre de quienes tienen diabetes. Por ejemplo: metformina, insulina',
  },
  { value: '4', label: 'Ninguno', info: '' },
];

export const optionTreatment: ItemOption[] = [
  { value: '1', label: 'Cáncer de cólon' },
  { value: '2', label: 'Cáncer de mama' },
  { value: '3', label: 'Cáncer de ovario' },
  { value: '4', label: 'Diabetes' },
  { value: '5', label: 'Asma' },
  { value: '6', label: 'Enfermedad Tromboembólica' },
  { value: '7', label: 'Trombofilia' },
  { value: '8', label: 'Otros' },
  { value: '9', label: 'Ninguno' },
];

export const optionConditions: ItemOption[] = [
  { value: '1', label: 'Crisis por hipertensión arterial' },
  { value: '2', label: 'Accidente cerebrovascular' },
  { value: '3', label: 'Diabetes' },
  { value: '4', label: 'Enfermedad Tromboembólica' },
  { value: '5', label: 'Asma' },
  { value: '6', label: 'Insuficiencia cardiaca' },
  { value: '7', label: 'No' },
];

export const optionNumber: ItemOption[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];
