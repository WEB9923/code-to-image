"use client";
import {JSX, useState} from "react";
import {ILanguageSelectorProps} from "@/types/interfaces";
import {FaChevronDown} from "react-icons/fa";
import {languages} from "@/constants/constants";
import OutsideClickHandler from "react-outside-click-handler";

export default function LanguageSelector({
	language,
	setLanguage,
	setActiveIcon
}: ILanguageSelectorProps): JSX.Element {
	const [showDropdown, setShowDropDown] = useState<boolean>(false);

	const toggleDropDown = () => setShowDropDown((prevState) => !prevState);

	const handleLanguageChange = (newLanguage: string): void => {
		setLanguage(newLanguage);

		const newActiveIcon = languages.find(
			(lang) => lang.name === newLanguage
		)?.icon;

		if (newActiveIcon) {
			setActiveIcon(newActiveIcon);
		}
		setShowDropDown(false);
	};

	return (
		<>
			<OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
				<div className="">
					<p className={"capitalize py-[5px] text-sm font-medium"}>language</p>
					<div
						onClick={toggleDropDown}
						className="dropdown-title capitalize w-[120px] select-none"
					>
						{language}
						<FaChevronDown/>
					</div>
					{showDropdown && (
						<div className="dropdown-menu w-[120px] select-none top-[94px]">
							{languages.map((lang, _i) => {
								return (
									<div key={_i}
											 className={`${lang.name.toLowerCase() === language.toLowerCase() && "bg-black bg-opacity-30"} p-1 rounded-[4.5px]`}>
										<button
											onClick={() => handleLanguageChange(lang.name)}
											className={`dropdown-item capitalize text-left w-full`}
										>
											{lang.name}
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
