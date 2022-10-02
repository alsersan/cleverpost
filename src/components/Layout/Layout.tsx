import { ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import './Layout.scss';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content-container">
        <Sidebar />
        <main className="layout__content">{children}</main>
      </div>
    </div>
  );
};
