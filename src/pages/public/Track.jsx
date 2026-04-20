import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ShippingFooter } from '../../components/layout/Footer';
import { TrackingSearch } from '../../components/tracking/TrackingSearch';
import { ShippingSummary } from '../../components/tracking/ShippingSummary';
import { ShippingMap } from '../../components/tracking/ShippingMap';
import { ShippingInfo } from '../../components/tracking/ShippingInfo';
import { Timeline } from '../../components/tracking/Timeline';
import { SupportCard } from '../../components/tracking/SupportCard';
import api from '../../services/api';

export function Track() {
  const { trackingNumber } = useParams();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchTracking = async (number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(`/shipments/track/${number}`);
      setShipment(res.data);
    } catch (err) {
      setError("We couldn't find a record with that tracking number. Please check for typos.");
      setShipment(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trackingNumber) {
      fetchTracking(trackingNumber);
    }
  }, [trackingNumber]);

  return (
    <div className={`min-h-screen bg-surface text-on-surface ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
      <TopNavigation
        activeKey="tracking"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="pb-20">
        <TrackingSearch onSearch={(num) => fetchTracking(num)} />

        <div className="max-w-6xl mx-auto px-6 relative z-10 -mt-10">
          {loading && (
            <div className="bg-surface-container-lowest rounded-[40px] p-20 ambient-shadow flex flex-col items-center justify-center space-y-4">
              <span className="material-symbols-outlined text-primary animate-spin text-5xl">progress_activity</span>
              <p className="text-sm font-black text-on-surface-variant uppercase tracking-widest text-center">Tracing Cargo Stream...</p>
            </div>
          )}

          {error && (
            <div className="bg-surface-container-lowest rounded-[40px] p-12 ambient-shadow border-t-4 border-error flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-error-container flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-3xl">error</span>
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-primary font-headline tracking-tighter mb-1">Trace Error</h4>
                <p className="text-on-surface-variant font-bold text-sm tracking-tight">{error}</p>
              </div>
            </div>
          )}

          {shipment && !loading && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-10">
                <ShippingSummary shipment={shipment} />
                <ShippingMap shipment={shipment} />
                <ShippingInfo shipment={shipment} />
              </div>

              <aside className="lg:col-span-4 space-y-10">
                <Timeline events={shipment.timeline} />
                <SupportCard />
              </aside>
            </div>
          )}

          {!shipment && !loading && !error && !trackingNumber && (
            <div className="bg-surface-container-lowest rounded-[40px] p-20 ambient-shadow border border-outline-variant/15 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center text-secondary-container mb-8">
                <span className="material-symbols-outlined text-4xl">package_2</span>
              </div>
              <h3 className="text-2xl font-extrabold text-primary font-headline tracking-tighter mb-2">Awaiting ID Input</h3>
              <p className="text-on-surface-variant font-bold text-sm max-w-xs">Enter your Tracking ID above to initialize the kinetic operational stream.</p>
            </div>
          )}
        </div>
      </main>

      <ShippingFooter />
    </div>
  );
}
