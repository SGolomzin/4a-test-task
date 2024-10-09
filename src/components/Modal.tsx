import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";

import { useDiscountStore } from "@/store/store";
import { PopupPricePlan } from "@/components/PopupPricePlan.tsx";

export const Modal = ({ contentData }: { contentData: any}) => {
	const { isDiscount } = useDiscountStore();
	const [open, setOpen] = useState(!isDiscount);

	useEffect(() => {
		setTimeout(() =>
			setOpen(!isDiscount),
			2000
		)
	}, [isDiscount]);

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent className="pt-0 gap-y-2 max-w-[95vw] sm:max-w-fit">
				<AlertDialogHeader className="flex flex-row justify-between">
					<div className="bg-[#01B9C5] font-medium text-white pt-1 pb-1.5 px-2.5 self-start">горящее предложение</div>
					<AlertDialogCancel asChild>
						<Button variant="ghost" size="icon"
						        className="size-9 p-2 hover:bg-black/20 text-[#CED1D8] hover:text-white border-none -mr-4">
							<XIcon className="size-5"/>
						</Button>
					</AlertDialogCancel>
				</AlertDialogHeader>
				<AlertDialogTitle className="font-['Rubik'] text-2xl md:text-3xl text-bold text-center uppercase mb-3.5">
					Не упусти свой <span className="text-[#01B9C5]">последний шанс</span>
				</AlertDialogTitle>
				<AlertDialogDescription className="text-center text-[15px] md:text-2xl text-foreground">
					Мы знаем, как трудно начать.. <b>Поэтому!</b>
				</AlertDialogDescription>
				<div className="border border-[#01B9C5] mx-auto rounded-[30px] text-[15px] md:text-2xl pt-3 pb-3.5 px-5 w-fit mb-[18px] font-medium">
					Дарим скидку для <span className="text-[#01B9C5]">лёгкого старта</span> 🏃‍♂️
				</div>
				<p className="text-[15px] text-foreground md:text-2xl mb-1.5 font-medium">Посмотри, что мы для тебя приготовили 🔥</p>
				<PopupPricePlan data={contentData} />
				<div className="flex justify-center">
					<AlertDialogAction asChild>
						<Button
							variant="secondary"
							size="lg"
							className="min-h-[62px] pt-5 pb-[22px] px-8 rounded-[30px] bg-[#FD4D35] font-['Rubik'] font-medium text-[20px]/[20px] subpixel-antialiased"
						>
							Начать тренироваться
						</Button>
					</AlertDialogAction>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}