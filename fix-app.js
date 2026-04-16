const fs = require('fs');

const content = `import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Landing } from './pages/public/Landing';
import { Track } from './pages/public/Track';
import { Dashboard } from './pages/public/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/track" element={<Track />} />
      <Route path="/track/:trackingNumber" element={<Track />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
`;

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx fixed successfully');
