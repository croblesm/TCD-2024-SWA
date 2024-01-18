import { useModalSessionStore } from "../../../libs";
import { SessionCard, SpringModal } from "../../UI";

export const ModalSesion = () => {
  const { isOpen, onClose, selectedSession } = useModalSessionStore();
  return (
    <SpringModal isOpen={isOpen} onClose={onClose}>
      <SessionCard session={selectedSession} />
    </SpringModal>
  );
};
