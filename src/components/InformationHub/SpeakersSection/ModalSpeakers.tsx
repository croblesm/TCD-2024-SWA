import { useModalSpeakerStore } from "../../../libs";
import { SpringModal } from "../../UI";

export const ModalSpeakers = () => {
  const { isOpen, onClose, selectedSpeaker } = useModalSpeakerStore();
  return (
    <SpringModal isOpen={isOpen} onClose={onClose}>
      <p>{JSON.stringify(selectedSpeaker, null, 2)}</p>
    </SpringModal>
  );
};
