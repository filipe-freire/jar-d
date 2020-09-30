import React from 'react';
import './Layout.scss';
const Layout = props => (
  <>
    <header>
      <h1>{props.headerTitle}</h1>
    </header>
    <main className="container-layout">{props.children}</main>
    <footer>
      <p>JAR'D | 2020</p>
    </footer>
  </>
);

export default Layout;
