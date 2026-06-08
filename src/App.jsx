import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recovery from './pages/Recovery'
import Tracker from './pages/Tracker'
import DepressionCheck from './pages/DepressionCheck'
import AICoach from './pages/AICoach'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/rest02">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recovery" element={<Recovery />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/depression-check" element={<DepressionCheck />} />
              <Route path="/ai-coach" element={<AICoach />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
