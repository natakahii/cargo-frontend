import { Link } from 'react-router-dom';
import { LayoutDashboard, Truck, Box, FileText, Settings, Search } from 'lucide-react';

const dashboardSidebarLinks = [
  { label: 'Overview', icon: LayoutDashboard, active: true, to: '/dashboard' },
  { label: 'Shipments', icon: Truck, to: '/shipments' },
  { label: 'Inventory', icon: Box, to: '/inventory' },
  { label: 'Quotes', icon: FileText, to: '/quotes' },
];

export function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <Link className="dashboard-sidebar__brand" to="/">
        NatakaHii Cargo
      </Link>

      <nav className="dashboard-sidebar__nav">
        {dashboardSidebarLinks.map((link) => (
          <Link className={link.active ? 'active' : ''} to={link.to} key={link.label}>
            <link.icon size={20} />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className="dashboard-sidebar__bottom">
        <div className="fleet-load-card">
          <p>Fleet Load</p>
          <div className="fleet-load-card__track">
            <span />
          </div>
          <strong>82% Capacity</strong>
        </div>
        <Link className="dashboard-sidebar__settings" to="/settings">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
