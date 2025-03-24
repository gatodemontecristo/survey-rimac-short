import { ItemOption } from '../../../types';
import { ErrorMsg, ItemRimac } from '../../atoms';
import { nanoid } from 'nanoid';
interface ItemCollectionProps {
  message: string | undefined;
  diagnoses: ItemOption[];
  fnRemove: (diagnosis: ItemOption) => void;
}
export const ItemCollection = ({
  message,
  diagnoses,
  fnRemove,
}: ItemCollectionProps) => {
  return (
    <div className='flex flex-row flex-wrap gap-2 mt-4'>
      {diagnoses.map((diagnosis) => (
        <ItemRimac
          key={nanoid()}
          text={diagnosis.label}
          fnClick={() => fnRemove(diagnosis)}
        ></ItemRimac>
      ))}
      {message && diagnoses.length === 0 && (
        <ErrorMsg message={message}></ErrorMsg>
      )}
    </div>
  );
};
