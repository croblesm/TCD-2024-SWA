import { create } from "zustand";
import { Session } from "../../interfaces";

type Store = {
  isOpen: boolean;
  selectedSession: Session;
  selectedSessionRoom: string;
  onClose: () => void;
  handleSelectSession: (session: Session, room: string) => void;
};

const nullSession: Session = {
  title: "",
  description: "",
  sessionType: null,
  level: null,
  duration: 0,
  agendas: null,
  firstName: "",
  lastName: "",
  photoUrl: "",
};

export const useModalSessionStore = create<Store>()((set) => ({
  isOpen: false,
  selectedSession: nullSession,
  selectedSessionRoom: "",
  onClose: () =>
    set({
      isOpen: false,
      selectedSession: nullSession,
      selectedSessionRoom: "",
    }),
  handleSelectSession: (session: Session, room: string) =>
    set({ selectedSession: session, selectedSessionRoom: room, isOpen: true }),
}));
