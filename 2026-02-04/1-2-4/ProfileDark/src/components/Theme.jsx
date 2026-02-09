import { useState } from "react"
import "../components/Theme.css"

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark", !darkMode)
  }

  return (
    <>
      <div className="mode">
        <span className="mode-header">My .</span> 
        <button className="theme" onClick={toggleTheme}> 
          {darkMode ? "D" : "L"}
        </button>
      </div>
      <hr/>
    </>
  )
}
