"use client";
import {JSX} from "react";
import {IPaddingSelectorProps} from "@/types/interfaces";

export default function PaddingSelector({
	paddings,
	setCurrentPadding,
	currentPadding
}: IPaddingSelectorProps): JSX.Element {

	const changePadding = (newPadding: string) => {
		setCurrentPadding(newPadding);
	}

	return (
		<>
			<div className="">
				<p className={"capitalize py-[5px] text-sm font-medium"}>Padding selector</p>
				<div className="flex items-center gap-5">
					{paddings.map((padding, _i) => {
						return (
							<button
								key={_i}
								onClick={() => changePadding(padding)}
								className={`${currentPadding === padding && "bg-black bg-opacity-30 rounded-[4.5px]"} h-[37px] flex items-center justify-center text-sm px-2`}
							>
								{padding}
							</button>
						)
					})}
				</div>
			</div>
		</>
	);
}
