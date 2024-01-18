import { useModalSessionStore } from "../../../libs";
import { SessionCard, SpringModal } from "../../UI";

export const ModalSesion = () => {
  const { isOpen, onClose, selectedSession, selectedSessionRoom } =
    useModalSessionStore();
  return (
    <SpringModal isOpen={isOpen} onClose={onClose}>
      <SessionCard session={selectedSession} room={selectedSessionRoom} />
    </SpringModal>
  );
};
