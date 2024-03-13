"use client";

import {JSX, useState} from "react";
import {FaChevronDown} from "react-icons/fa";
import {IThemeSelectorProps} from "@/types/interfaces";
import {themes} from "@/constants/constants";
import OutsideClickHandler from "react-outside-click-handler";

export default function ThemeSelector({
	theme,
	setTheme
}: IThemeSelectorProps): JSX.Element {
	const [showDropdown, setShowDropDown] = useState<boolean>(false);

	const toggleDropDown = () => setShowDropDown((prevState) => !prevState);

	const handleThemeChange = (newTheme: string): void => {
		setTheme(newTheme);
		setShowDropDown(false);
	};

	return (
		<>
			<OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
				<div className="theme-selector">
					<p className={"capitalize py-[5px] text-sm font-medium"}>Code Themes</p>
					<div
						onClick={toggleDropDown}
						className="dropdown-title capitalize w-[120px] select-none"
					>
						{theme}
						<FaChevronDown/>
					</div>
					{showDropdown && (
						<div className="dropdown-menu w-[120px] select-none top-[94px]">
							{themes.map((th, _i) => {
								return (
									<div key={_i}
											 className={`${th.toLowerCase() === theme.toLowerCase() && "bg-black bg-opacity-30"} p-1 rounded-[4.5px]`}>
										<button
											onClick={() => handleThemeChange(th)}
											className={`dropdown-item capitalize text-left w-full`}
										>
											{th}
										</button>
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