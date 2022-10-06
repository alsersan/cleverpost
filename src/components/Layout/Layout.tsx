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
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="layout__content">{children}</main>
      </div>
    </div>
  );
};
