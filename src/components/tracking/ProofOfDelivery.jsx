import { Camera } from 'lucide-react';

export function ProofOfDelivery() {
  return (
    <section className="shipping-proof-card">
      <Camera size={24} className="text-slate-400 mb-2" />
      <p>Proof of Delivery</p>
      <strong>Pending delivery to Mwanza</strong>
    </section>
  );
}
