import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.module.css';
import ErrorScreen from './screens/ErrorScreen.tsx';
import Integers from './screens/Integers.tsx';
import Dag from './screens/Dag.tsx';
import Sequence from './screens/Sequence.tsx';
import BinaryTree from './screens/Binary.tsx';
import Layout from './assets/layout/Layout.tsx';
import ContactUs from './screens/ContactUs.tsx';

const root = document.getElementById('root')!;
const anyReactDOM: any = ReactDOM;
anyReactDOM.createRoot(root).render(
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/integers" element={<Integers />} />
        <Route path="/acyclic" element={<Dag />} />
        <Route path="/binary" element={<BinaryTree />} />
        <Route path="/sequences" element={<Sequence />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </Layout>
  </HashRouter>
);
