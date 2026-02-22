import { useLanguage } from "./Hook";

export default function Header() {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <span className="lg-text">{currentLanguage.greeting}, {currentLanguage.name}!</span>
      <button 
      className="gradient-btn" 
      onClick={toggleLanguage}>
          {currentLanguage.Language}
          <span className="arrow"> ☞ </span>
        </button>
    </header>
  );
}
