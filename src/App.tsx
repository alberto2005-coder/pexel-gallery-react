import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ListaImagenes } from './components/ListaImagenes';
import { useTheme } from './hooks/useTheme';

interface NavbarProps {
  toggleTheme: () => void; 
  theme: string;           
}

const Navbar = ({ toggleTheme, theme }: NavbarProps) => (
  <nav className="navbar">
    <div className="navbar-brand">📸 PexelApp</div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/imagenes?q=Tigers" className="nav-link highlight">Galería</Link>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  </nav>
);

const Home = () => {
  const [inputTexto, setInputTexto] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputTexto.trim()) {
      navigate(`/imagenes?q=${inputTexto}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>Bienvenido a tu Galería Visual</h1>
        <p>Encuentra la inspiración perfecta. ¿Qué quieres ver hoy?</p>
        
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Ej: Playas, Arquitectura, Café..." 
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <button onClick={handleSearch} className="cta-button">
            Buscar Imágenes
          </button>
        </div>

      </div>
    </div>
  );
};

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <BrowserRouter>
      <div className="app-layout">
        {}
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imagenes" element={<ListaImagenes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;