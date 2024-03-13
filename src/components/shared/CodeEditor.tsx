"use client";
import {JSX, useEffect, useState} from "react";
import {Resizable} from "re-resizable";
import AceEditor from "react-ace";
import {ICodeEditorProps} from "@/types/interfaces";
import Image from "next/image";

// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/mode-rust";

// themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";


export default function CodeEditor({
	onCodeChange,
	language,
	theme,
	icon,
	background,
	currentPadding
}: ICodeEditorProps): JSX.Element {
	const [width, setWidth] = useState<number>(1000);
	const [height, setHeight] = useState<number | null>(500);

	//@ts-ignore
	const handleResize = (evt, direction, ref, pos) => {
		const newHeight = ref.style.height;
		setHeight(parseInt(newHeight));

	}

	const updateSize = () => {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", updateSize);
		updateSize();
		return window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<>
			<Resizable
				minHeight={466}
				minWidth={510}
				maxWidth={1000}
				defaultSize={{
					width: width,
					height: height || 500
				}}
				onResize={handleResize}
				className={"resize-container relative"}
			>
				<div
					style={{
						background: background,
						padding: currentPadding
					}}
					className={"code-block rounded-md"}
				>
					<div className={"code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80"}>
						<div className={"dots flex items-center gap-2"}>
							<div className="w-3 h-3 rounded-full bg-[#ff5656]" />
							<div className="w-3 h-3 rounded-full bg-[#ffbc6a]" />
							<div className="w-3 h-3 rounded-full bg-[#67f772]" />
						</div>
						<div className="input-control w-full">
							<input
								type="text"
								className={"w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"}
							/>
						</div>
						<div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm relative w-5 h-5">
							<Image src={icon} alt={"icon"} fill/>
						</div>
					</div>
					<AceEditor
						fontSize={16}
						name={"UNIQUE_ID_OF_DIV"}
						showGutter={false}
						theme={theme}
						mode={language.toLocaleLowerCase()}
						wrapEnabled={true}
						showPrintMargin={false}
						editorProps={{
							$blockScrolling: false
						}}
						highlightActiveLine={false}
						className={"ace-editor-container"}
					/>
				</div>
			</Resizable>
		</>
	);
}