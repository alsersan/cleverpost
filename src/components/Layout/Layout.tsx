import { ReactNode, useState } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import './Layout.scss';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
      <div className="layout__content-container">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={setIsSidebarOpen}
        />
        <main className="layout__content">{children}</main>
        <div
          className={`layout__overlay ${
            isSidebarOpen ? 'layout__overlay--visible' : ''
          }`}
          onClick={() => setIsSidebarOpen(false)}></div>
      </div>
    </div>
  );
};
