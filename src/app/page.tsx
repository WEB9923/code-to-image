"use client";
import {JSX, useState} from "react";
import CodeEditor from "@/components/shared/CodeEditor";
import {backgrounds, languages, themes} from "@/constants/constants";
import LanguageSelector from "@/components/ui/LanguageSelector";
import ThemeSelector from "@/components/ui/ThemeSelector";
import BackgroundSelector from "@/components/ui/BackgroundSelector";
import PaddingSelector from "@/components/ui/PaddingSelector";
const item = "hello";
export default function Home(): JSX.Element {
  const [language, setLanguage] = useState<string>(languages[0].name);
  const [activeIcon, setActiveIcon] = useState<string>(languages[0].icon);
  const [theme, setTheme] = useState<string>(themes[0]);
  const [background, setBackground] = useState<string>(backgrounds[0]);
  const [paddings, setPaddings] = useState<string[]>([
    "0",
    "1rem",
    "2.5rem",
    "3rem",
    "4rem"
  ]);
  const [currentPadding, setCurrentPadding] = useState<string>(paddings[1]);

  return (
    <main className={"h-[100vh] flex flex-col items-center justify-between"}>
      <header className={"mt-5 w-[900px] p-5 flex gap-6 fixed top-0 left-1/2 transform -translate-x-1/2 z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-md"}>

        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}/>

        <ThemeSelector
          theme={theme}
          setTheme={setTheme}/>

        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />

        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />

      </header>
      <div className={"code-editor-ref mt-[14rem]"}>
        <CodeEditor
          language={language}
          theme={theme}
          icon={activeIcon}
          background={background}
          currentPadding={currentPadding}/>
      </div>
    </main>
  );
}
