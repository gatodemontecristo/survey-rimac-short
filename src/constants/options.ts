import { ItemOption } from '../types';

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
