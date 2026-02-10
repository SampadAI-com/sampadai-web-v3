"use client";

import { useEffect, useRef, useState } from "react";
import {
  defaultLanguage,
  languageLabels,
  supportedLanguages,
  type Language
} from "./content";

const cookieName = "sampadai_lang";

const languageAriaLabels: Record<string, string> = {
  en: "Select language",
  de: "Sprache wählen",
  pl: "Wybierz język",
  es: "Seleccionar idioma"
};

function buildPath(pathname: string, nextLang: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLang}`;
  }

  const current = segments[0];
  if (supportedLanguages.includes(current as (typeof supportedLanguages)[number])) {
    segments[0] = nextLang;
  } else {
    segments.unshift(nextLang);
  }

  return `/${segments.join("/")}`;
}

type LanguageSwitcherProps = {
  currentLang?: Language;
};

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeLang = currentLang || defaultLanguage;

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  const handleSelect = (lang: string) => {
    if (lang === activeLang) {
      setOpen(false);
      return;
    }

    document.cookie = `${cookieName}=${lang}; path=/; max-age=31536000; samesite=lax`;
    const nextPath =
      typeof window === "undefined"
        ? `/${lang}`
        : buildPath(window.location.pathname, lang);
    if (typeof window !== "undefined") {
      window.location.assign(nextPath);
    }
    setOpen(false);
  };

  return (
    <div className="language-switcher" ref={menuRef}>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={languageAriaLabels[activeLang] || languageAriaLabels.en}
      >
        <span className="language-label">
          {languageLabels[activeLang]}
        </span>
        <span className={`language-caret ${open ? "open" : ""}`}>v</span>
      </button>
      <div className={`language-menu ${open ? "open" : ""}`} role="listbox">
        {supportedLanguages.map((lang) => (
          <button
            key={lang}
            type="button"
            role="option"
            aria-selected={lang === activeLang}
            className={`language-option ${lang === activeLang ? "active" : ""}`}
            onClick={() => handleSelect(lang)}
          >
            {languageLabels[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
