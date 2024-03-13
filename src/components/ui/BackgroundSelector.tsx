"use client";

import {JSX, useState} from "react";
import {IBackgroundSelectorProps} from "@/types/interfaces";
import {FaChevronDown} from "react-icons/fa";
import {backgrounds, themes} from "@/constants/constants";
import OutsideClickHandler from "react-outside-click-handler";

export default function BackgroundSelector({
	background,
	setBackground
}: IBackgroundSelectorProps): JSX.Element {
	const [showDropdown, setShowDropDown] = useState<boolean>(false);

	const toggleDropDown = () => setShowDropDown((prevState) => !prevState);

	const handleBackgroundChange = (newBackground: string): void => {
		setBackground(newBackground);
		setShowDropDown(false);
	};

	return (
		<>
			<OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
				<div className="relative bg-selector">
					<p className={"capitalize py-[5px] text-sm font-medium"}>Code Themes</p>
					<div
						onClick={toggleDropDown}
						className="dropdown-title w-[55px] select-none"
					>
						<div
							className={"rounded-full w-[20px] h-[20px]"}
							style={{
								background: background
							}}
						/>
						<FaChevronDown/>
					</div>
					{showDropdown && (
						<div className="dropdown-menu w-[55px] select-none top-[94px]">
							{backgrounds.map((bg, _i) => {
								return (
									<div key={_i}
											 className={`${bg === background && "bg-black bg-opacity-30"} py-1 px-1.5 rounded-[4.5px] w-fit mx-auto flex items-center justify-center`}>
										<button
											onClick={() => handleBackgroundChange(bg)}
											className={`dropdown-item w-[20px] h-[20px] rounded-full`}
											style={{
												background: bg
											}}
										/>
									</div>
								)
							})}
						</div>
					)}
				</div>
			</OutsideClickHandler>
		</>
	);
}
