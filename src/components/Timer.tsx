"use client";

import styles from "./Timer.module.css"
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TimerProps {
	duration: number;
	warningDuration: number;
}

export const Timer = ({ duration, warningDuration }: TimerProps) => {
	const [timer, setTimer] = useState(duration);

	const onComplete = () => {
		console.log("Timer completed");
	}

	useEffect(() => {
		if (timer <= 0) {
			onComplete();
			return;
		}

		const interval = setInterval(() => setTimer((prev) => --prev), 1000)

		return () => clearInterval(interval);
	}, [timer, onComplete]);

	const minutes = Math.trunc(timer / 60),
				seconds = Math.trunc(timer % 60);

	return (
		<div className={cn(styles.timer,
				"text-[#01B9C5] gap-x-3 lg:gap-x-2",
				{ "timer--warning text-[#FD4D35]": timer <= warningDuration },
		)}>
			<div className="contents leading-none text-[40px]/none lg:text-6xl/none">
				<span className={styles.timer__minutes}>
					{minutes < 10 ? "0" + minutes : String(minutes)}
				</span>
				<span className={styles.timer__seconds}>
					{seconds < 10 ? "0" + seconds : String(seconds)}
				</span>
			</div>
			<span className={cn("text-lg lg:text-xl font-bold", styles.timer__separator)}>:</span>
			<div className="contents text-sm leading-none lg:text-base">
				<p className={styles["timer__minutes-label"]}>минут</p>
				<p className={styles["timer__seconds-label"]}>секунд</p>
			</div>
		</div>
	)
}