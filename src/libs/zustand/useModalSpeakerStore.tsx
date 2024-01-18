import { create } from "zustand";
import { ISpeakerResponse } from "../../interfaces";

type Store = {
  isOpen: boolean;
  selectedSpeaker: ISpeakerResponse;
  onClose: () => void;
  handleSelectSpeaker: (speaker: ISpeakerResponse) => void;
};

const nullSpeaker = {
  speakerId: 0,
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  bio: "",
  photoUrl: null,
  twitterHandle: null,
  linkedInProfile: null,
  gitHubProfile: null,
  website: null,
};

export const useModalSpeakerStore = create<Store>()((set) => ({
  isOpen: false,
  selectedSpeaker: nullSpeaker,
  onClose: () => set({ isOpen: false, selectedSpeaker: nullSpeaker }),
  handleSelectSpeaker: (speaker: ISpeakerResponse) =>
    set({ selectedSpeaker: speaker, isOpen: true }),
}));
