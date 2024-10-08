import { create } from "zustand";

interface DiscountStoreState {
	isDiscount: boolean;
	setDiscount: (bool: boolean) => void;
}

export const useDiscountStore = create<DiscountStoreState>(
	(set) => ({
		isDiscount: true,
		setDiscount: (bool: boolean) => set((state) => ({ isDiscount: bool })),
	})
);
