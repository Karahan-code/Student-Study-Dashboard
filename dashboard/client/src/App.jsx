import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* Şimdilik sadece bir başlık koyalım */}
      <h1>StudyFLOW Dashboard Yükleniyor...</h1>
    </div>
  )
}

export default App
