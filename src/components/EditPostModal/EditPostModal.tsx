import { createPortal } from 'react-dom';
import './EditPostModal.scss';

interface Props {
  container: HTMLElement;
}

export const EditPostModal: React.FC<Props> = ({ container }) => {
  return createPortal(
    <div className="edit-modal">
      <div className="edit-modal__box">Placeholder</div>
    </div>,
    container
  );
};
