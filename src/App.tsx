import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import DebtLedger from './pages/DebtLedger';
import ActivityFeed from './pages/ActivityFeed';
import TicketGenerator from './pages/TicketGenerator';
import DebtWall from './pages/DebtWall';
import MemoryVault from './pages/MemoryVault';
import Leaderboard from './pages/Leaderboard';
import FormModal from './components/FormModal';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <CustomCursor />
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ledger" element={<DebtLedger />} />
            <Route path="/activity" element={<ActivityFeed />} />
            <Route path="/tickets" element={<TicketGenerator />} />
            <Route path="/wall" element={<DebtWall />} />
            <Route path="/vault" element={<MemoryVault />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
          <FormModal />
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;