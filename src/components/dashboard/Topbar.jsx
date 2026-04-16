import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export function DashboardTopbar() {
  return (
    <nav className="dashboard-topbar">
      <Link className="dashboard-topbar__brand" to="/">
        NatakaHii
      </Link>
      <div className="dashboard-topbar__actions">
        <button aria-label="Search dashboard" className="dashboard-icon-button" type="button">
          <Search size={20} />
        </button>
        <Link className="dashboard-book-button" to="/book">
          Book
        </Link>
      </div>
    </nav>
  );
}
