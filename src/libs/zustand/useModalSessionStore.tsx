import { create } from "zustand";
import { Session } from "../../interfaces";

type Store = {
  isOpen: boolean;
  selectedSession: Session;
  onClose: () => void;
  handleSelectSession: (session: Session) => void;
};

const nullSession: Session = {
  title: "",
  description: "",
  sessionType: null,
  level: null,
  duration: 0,
  speakerId: 0,
  agendas: null,
};

export const useModalSessionStore = create<Store>()((set) => ({
  isOpen: false,
  selectedSession: nullSession,
  onClose: () => set({ isOpen: false, selectedSession: nullSession }),
  handleSelectSession: (session: Session) =>
    set({ selectedSession: session, isOpen: true }),
}));
