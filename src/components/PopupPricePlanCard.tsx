import { cn } from "@/lib/utils.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Badge } from "@/components/Badge.tsx";

interface PopupPricePlanCardProps {
	plan: string;
	price: number;
	pricePopup: number;
	selected: boolean;
	index: number;
}

const PERCENTS = [40, 50, 60];

export const PopupPricePlanCard = ({ plan, price, pricePopup, selected, index }: PopupPricePlanCardProps) => {
	return (
		<Card className={cn("border-2 h-full hover:border-[#01B9C5]/50 rounded-[20px]", selected
			? "bg-[#01B9C5]/5 border-[#01B9C5]"
			: "bg-white border-[#D3D6DD]"
		)}>
			<CardContent className="h-full pb-[18px] xl:pb-5 px-5 xl:px-6 pt-6 flex flex-col gap-y-4">
				{/* Тариф */}
				<div className="flex justify-between items-center">
					<div className="font-['Bebas_Neue_Cyrillic'] text-foreground text-2xl md:text-[26px]">{plan}</div>
					<RadioGroupItem
						value={`${index}`}
						id={plan + "popup"}
						className={cn({"border-[#01B9C5]": selected})}
					/>
				</div>
				{/* Цены */}
				<div className="flex justify-between items-baseline tracking-tighter xl:flex-col-reverse">
					<div className="flex">
						<div className={"text-[44px]/[44px] md:text-[46px]/[46px] font-bold text-foreground pt-4"}>{pricePopup}₽</div>
						<Badge
							percent={PERCENTS[Number(index)]}
							show={true}
							className="relative w-10 h-10 sm:w-[50px] sm:h-[50px] text-[13px]"
						/>
					</div>
					<div className={"crossed text-[20px]/[20px] font-bold text-[#6C707B] xl:mb-[32px]"}>{price}₽</div>
				</div>
			</CardContent>
		</Card>
	)
}