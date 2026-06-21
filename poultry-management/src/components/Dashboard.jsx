import '../styles/Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="brand-area">Poultry Farm</div>
          <ul className="nav-links">
            <li className="nav-item active">
              <div className="icon-placeholder"></div> Dashboard
            </li>
            <li className="nav-item">
              <div className="icon-placeholder"></div> Inventory
            </li>
            <li className="nav-item">
              <div className="icon-placeholder"></div> Reports
            </li>
            <li className="nav-item">
              <div className="icon-placeholder"></div> Settings
            </li>
            <li className="nav-item">
              <div className="icon-placeholder"></div> Support
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <div className="user-avatar-placeholder"></div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>
              {user?.userId || 'User'}
            </div>
            <div style={{ fontSize: '11px', color: '#b3b8d3' }}>
              {user?.role?.toUpperCase() || 'Guest'}
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-wrapper">
        {/* HEADER */}
        <header className="top-navbar">
          <div className="header-title">Dashboard</div>
          <div className="header-controls">
            <div className="search-placeholder">Search Field...</div>
            <div className="top-icon"></div>
            <button 
              onClick={onLogout}
              className="logout-btn"
              title="Logout"
            >
              🚪
            </button>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <section className="dashboard-view">
          {/* METRICS */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon-box"></div>
              <div className="metric-info">
                <div className="metric-title">Active Birds</div>
                <div className="metric-value">2,450</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon-box"></div>
              <div className="metric-info">
                <div className="metric-title">Daily Production</div>
                <div className="metric-value">1,240</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon-box"></div>
              <div className="metric-info">
                <div className="metric-title">Feed Inventory</div>
                <div className="metric-value">8,500</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon-box"></div>
              <div className="metric-info">
                <div className="metric-title">Revenue</div>
                <div className="metric-value">$45,200</div>
              </div>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="content-grid">
            {/* TOP LEFT */}
            <div className="panel-box">
              <div className="panel-header">
                <div className="panel-title">Farm Overview</div>
                <div className="panel-action">Filter</div>
              </div>
              <div className="sub-flex-row">
                <div className="sub-card-half">
                  <div className="skeleton-line" style={{ marginBottom: '15px' }}></div>
                  <div className="skeleton-line short" style={{ marginBottom: '30px' }}></div>
                  <div className="skeleton-line" style={{ height: '6px', width: '100%' }}></div>
                </div>
                <div className="sub-card-half">
                  <div className="skeleton-line" style={{ marginBottom: '15px' }}></div>
                  <div className="skeleton-line short" style={{ marginBottom: '30px' }}></div>
                  <div className="skeleton-line" style={{ height: '6px', width: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* TOP RIGHT */}
            <div className="panel-box">
              <div className="panel-header">
                <div className="panel-title">Recent Activity</div>
                <div className="panel-action">View All</div>
              </div>
              <table className="wireframe-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Details</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line"></div></td>
                  </tr>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line"></div></td>
                  </tr>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line"></div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* BOTTOM LEFT */}
            <div className="panel-box">
              <div className="panel-header">
                <div className="panel-title">Health Status</div>
                <div className="panel-action">View All</div>
              </div>
              <table className="wireframe-table">
                <thead>
                  <tr>
                    <th>Pen ID</th>
                    <th>Birds</th>
                    <th>Condition</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line pill"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line pill"></div></td>
                  </tr>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line pill"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                    <td><div className="skeleton-line pill"></div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* BOTTOM RIGHT */}
            <div className="panel-box">
              <div className="panel-header">
                <div className="panel-title">Team Members</div>
                <div className="panel-action" style={{ backgroundColor: '#3f459b', color: 'white', padding: '6px 12px', borderRadius: '6px' }}>
                  + Add
                </div>
              </div>
              <table className="wireframe-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line pill"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                  </tr>
                  <tr>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line"></div></td>
                    <td><div className="skeleton-line pill"></div></td>
                    <td><div className="skeleton-line short"></div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
