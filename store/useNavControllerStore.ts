import { create } from 'zustand';

interface NavControllerTypes {
	isOpen: boolean;
	isScrolled: boolean;
	activeMenu: number | null;
	setIsOpen: (open: boolean) => void;
	setIsScrolled: (scrolled: boolean) => void;
	setActiveMenu: (menu: number | null) => void;
}

export const useNavControllerStore = create<NavControllerTypes>((set) => ({
	isOpen: false,
	isScrolled: false,
	activeMenu: null,
	setIsOpen: (open) => set({ isOpen: open }),
	setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
	setActiveMenu: (menu) => set({ activeMenu: menu }),
}));
