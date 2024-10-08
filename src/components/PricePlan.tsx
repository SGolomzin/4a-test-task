"use client";

import type { preparedData} from "@/types/prepared-data";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import { PricePlanCard } from "@/components/PricePlanCard.tsx";
import type { PromoKeys } from "@/components/PricePlanCard.tsx";

import { useState } from "react";

interface PricePlanProps {
	data: preparedData
}

export const PricePlan = ({ data }: PricePlanProps) => {
	const [selected, setSelected] = useState("0");

	return (
		<RadioGroup
			defaultValue={selected}
			onValueChange={(value) => setSelected(value)}
			className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2 sm:gap-y-10 items-start mb-[12px]"
		>
			{data && Object.entries(data).map(([level, content], index) => {
				const { price, priceDiscount } = content,
					isSelected = selected === String(index);

				return (
					<Label key={level} htmlFor={level} className="cursor-pointer h-full sm:last:col-span-3 group select-none">
						<RadioGroupItem value={`${index}`} id={level} className="hidden"/>
						<PricePlanCard
							plan={level as PromoKeys}
							price={price}
							priceDiscount={priceDiscount}
							selected={isSelected}/>
					</Label>
				)
			})}
		</RadioGroup>
	);
}