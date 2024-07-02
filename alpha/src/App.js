// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import ClientList from './ClientList';
import SupplierList from './SupplierList';
import CategoryManager from './CategoryManager';
import MaterialManager from './MaterialManager';
import LaborManager from './LaborManager';
import ModuleManager from './ModuleManager';
import ModuleCompositeManager from './ModuleCompositeManager';
import Homepage from './Homepage';
import ProjectForm from './ProjectForm';
import ProjectCreation from './ProjectCreation';
import { ConfigProvider } from 'antd';
import darkTheme from 'antd/lib/theme/themes/dark';

const App = () => {
  return (
    <ConfigProvider theme={darkTheme}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/clients" element={<ClientList />} />
            <Route path="/suppliers" element={<SupplierList />} />
            <Route path="/categories" element={<CategoryManager />} />
            <Route path="/materials" element={<MaterialManager />} />
            <Route path="/labor" element={<LaborManager />} />
            <Route path="/module" element={<ModuleManager />} />
            <Route path="/modulecomposite" element={<ModuleCompositeManager />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/" element={<Homepage />} />
            <Route path="/project" element={<ProjectForm />} />
            <Route path="/projectedit" element={<ProjectCreation />} />
            <Route path="/projectedit/:projectId" element={<ProjectCreation />} />
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
