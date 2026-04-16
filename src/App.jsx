import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Landing } from './pages/public/Landing';
import { Track } from './pages/public/Track';
import { Dashboard } from './pages/public/Dashboard';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';
import { BookShipment } from './pages/public/BookShipment';
import { BookingSuccess } from './pages/public/BookingSuccess';
import { Support } from './pages/public/Support';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Shipments } from './pages/ops/Shipments';
import { ShipmentDetail } from './pages/ops/ShipmentDetail';
import { QCInspection } from './pages/ops/QCInspection';
import { DeliveryRuns } from './pages/ops/DeliveryRuns';
import { DeliveryRunDetail } from './pages/ops/DeliveryRunDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/book" element={<BookShipment />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/support" element={<Support />} />
      <Route path="/track" element={<Track />} />
      <Route path="/track/:trackingNumber" element={<Track />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/shipments" element={
        <ProtectedRoute>
          <Shipments />
        </ProtectedRoute>
      } />
      <Route path="/shipments/:id" element={
        <ProtectedRoute>
          <ShipmentDetail />
        </ProtectedRoute>
      } />
      <Route path="/qc" element={
        <ProtectedRoute>
          <QCInspection />
        </ProtectedRoute>
      } />
      <Route path="/delivery-runs" element={
        <ProtectedRoute>
          <DeliveryRuns />
        </ProtectedRoute>
      } />
      <Route path="/delivery-runs/:id" element={
        <ProtectedRoute>
          <DeliveryRunDetail />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
