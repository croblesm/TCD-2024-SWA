import { useModalSpeakerStore } from "../../../libs";
import { SpeakerCard, SpringModal } from "../../UI";

export const ModalSpeakers = () => {
  const { isOpen, onClose, selectedSpeaker } = useModalSpeakerStore();
  return (
    <SpringModal isOpen={isOpen} onClose={onClose}>
      <SpeakerCard speaker={selectedSpeaker} />
    </SpringModal>
  );
};
