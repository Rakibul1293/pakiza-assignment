import React from 'react';
import './App.css';
import './AppResponsive.css';
import 'antd/dist/antd.css';

import AppHeader from "./components/common/Header";
import AppHomes from "./views/Home";
import AppFooter from "./components/common/Footer";

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHomes />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
