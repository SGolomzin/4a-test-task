type pdKeys = "1 неделя" | "1 месяц" | "3 месяца" | "навсегда";

interface pdValue {
	price: number;
	discountPrice: number;
	popupPrice?: number;
}

export type preparedData = Record<pdKeys, pdValue>