
export interface ICodeEditorProps {
	onCodeChange: (code: string) => void;
	language: string;
	theme: string;
	icon: string;
	background?: string;
	currentPadding?: string;
}

export interface ILanguageSelectorProps {
	language: string;
	setLanguage: (language: string) => void;
	setActiveIcon: (icon: string) => void;
}

export interface IThemeSelectorProps {
	theme: string;
	setTheme: (theme: string) => void;
}

export interface IBackgroundSelectorProps {
	background: string;
	setBackground: (background: string) => void;
}


export interface IPaddingSelectorProps {
	paddings: string[];
	currentPadding: string;
	setCurrentPadding: (padding: string) => void;
}

