"use client";

import type { preparedData} from "@/types/prepared-data";

import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import { PopupPricePlanCard } from "@/components/PopupPricePlanCard.tsx";
import { useState } from "react";

interface PopupPricePlanProps {
	data: preparedData
}

export const PopupPricePlan = ({ data }: PopupPricePlanProps) => {
	const [selected, setSelected] = useState("0");

	return (
		<RadioGroup
			defaultValue={selected}
			onValueChange={(value) => setSelected(value)}
			className="grid grid-cols-1 xl:grid-cols-3 gap-x-3 gap-y-1.5 mb-5 sm:mb-10"
		>
			{data && Object.entries(data).map(([level, content], index) => {
				const { price, pricePopup } = content,
					isSelected = selected === String(index);

				if (!pricePopup) return null;

				return (
					<Label key={level} htmlFor={level + "popup"} className="cursor-pointer h-full select-none">
						<PopupPricePlanCard
							plan={level}
							price={price}
							pricePopup={pricePopup}
							selected={isSelected}
							index={index}
						/>
					</Label>
				)
			})}
		</RadioGroup>
	)
}