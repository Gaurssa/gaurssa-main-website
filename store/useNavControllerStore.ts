import { create } from 'zustand';

interface NavControllerTypes {
	isOpen: boolean;
	isScrolled: boolean;
	activeMenu: number | null;
	isNavWhite: boolean | null;
	setIsNavWhite: (path: boolean | null) => void;
	setIsOpen: (open: boolean) => void;
	setIsScrolled: (scrolled: boolean) => void;
	setActiveMenu: (menu: number | null) => void;
}

export const useNavControllerStore = create<NavControllerTypes>((set) => ({
	isOpen: false,
	isScrolled: false,
	activeMenu: null,
	isNavWhite: null,
	setIsNavWhite: (path) => set({ isNavWhite: path }),
	setIsOpen: (open) => set({ isOpen: open }),
	setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
	setActiveMenu: (menu) => set({ activeMenu: menu }),
}));
