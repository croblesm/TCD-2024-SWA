import { useModalSessionStore } from "../../../libs";
import { SpringModal } from "../../UI";

export const ModalSesion = () => {
  const { isOpen, onClose, selectedSession } = useModalSessionStore();
  return (
    <SpringModal isOpen={isOpen} onClose={onClose}>
      <p>{JSON.stringify(selectedSession, null, 2)}</p>
    </SpringModal>
  );
};
