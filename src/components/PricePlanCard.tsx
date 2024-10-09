"use client";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/Badge.tsx";
import { cn } from "@/lib/utils.ts";

import { useDiscountStore } from "@/store/store.ts"

const PROMO_CONTENT = {
	"1 неделя": {
		label: "Чтобы просто начать 👍🏻",
		discountPercent: 30
	},
	"1 месяц": {
		label: "Привести тело впорядок 💪🏻",
		discountPercent: 40
	},
	"3 месяца": {
		label: "Изменить образ жизни 🔥",
		discountPercent: 50
	},
	"навсегда": {
		label: "Всегда быть в форме и поддерживать своё здоровье ⭐️",
		discountPercent: 70
	}
}
export type PromoKeys = keyof typeof PROMO_CONTENT;

interface PricePlanCardProps {
	plan: PromoKeys;
	price: number;
	priceDiscount: number;
	selected: boolean;
}


export const PricePlanCard = ({plan, price, priceDiscount, selected}: PricePlanCardProps) => {
	const {isDiscount} = useDiscountStore();

	return (
		<Card className={cn("border-2 h-full hover:border-[#01B9C5]/50 rounded-[20px]", selected
			? "bg-[#01B9C5]/5 border-[#01B9C5]"
			: "bg-white border-[#D3D6DD]"
		)}>
			<CardContent className="relative h-full pb-[26px] px-[24px] sm:px-[30px] pt-[36px] sm:pt-[45px] flex sm:flex-col gap-x-[20px] gap-y-[18px] group-[:last-of-type]:flex-row sm:group-[:last-of-type]:pr-16">
				{/* Тариф и описание */}
				<div className="flex flex-col space-y-4 justify-between w-36 sm:contents">
					<div className="order-1 font-['Bebas_Neue_Cyrillic'] text-[#687078] text-3xl group-[:last-of-type]:lg:text-[38px] group-[:last-of-type]:text-foreground  group-[:last-of-type]:self-baseline">{plan}</div>
					<div className="order-3 font-medium text-center text-[#2F4353] group-[:last-of-type]:sm:text-left group-[:last-of-type]:sm:ml-[30px] group-[:last-of-type]:sm:self-end group-[:last-of-type]:sm:text-balance">
						{PROMO_CONTENT[plan].label}
					</div>
				</div>
				{/* Цены */}
				<div className="order-2 text-end tracking-tighter group-[:last-of-type]:self-baseline">
					<div className={cn(isDiscount
						? "text-[50px]/[50px] font-bold text-foreground"
						: "hidden"
					)}>{priceDiscount}₽</div>
					<div className={cn( isDiscount
						? "text-2xl text-[#95979F] font-medium line-through"
						: "text-[50px]/[50px] font-bold mb-[32px]"
					)}>{price}₽</div>
				</div>
				<Badge percent={PROMO_CONTENT[plan].discountPercent} show={isDiscount}/>
			</CardContent>
		</Card>
	)
}