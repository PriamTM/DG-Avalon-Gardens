import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/Layout/Layout'
import AgeGate from './components/AgeGate/AgeGate'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import BranHorn from './pages/BranHorn/BranHorn'
import NotFound from './pages/NotFound/NotFound'
import { useAgeVerified } from './hooks/useAgeVerified'

function App() {
  const { verified, verify } = useAgeVerified()
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <div aria-hidden={!verified} inert={!verified || undefined}>
        <ThemeProvider theme={darkTheme}>        
          <HashRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="menu" element={<Menu />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/branhorn" element={<BranHorn />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </div>

      {!verified && <AgeGate onVerify={verify} />}
    </>
  )
}

export default App
