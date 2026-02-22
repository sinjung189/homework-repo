import { createContext,useState } from "react";



export const LgContext = createContext();


export default function Langprovider({children}) {
    const koLanguage = {
        greeting: "안녕하세요",
        name: "도타지",
        Language: "언어 변경"
    }

    const enLanguage = {
        greeting: "Hello",
        name: "Dotaji",
        Language: "Change Language"
    }

    const [language,setLanguage] = useState("ko")

    const currentLanguage = language === "ko" ? koLanguage : enLanguage; 

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "ko" ? "en" : "ko"));
    }
  return (
    <LgContext.Provider value = {{currentLanguage, toggleLanguage}}>
        {children}
    </LgContext.Provider>
  )
}
