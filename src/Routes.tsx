import { DHLayout } from '@daohaus/connect';
import { Routes as Router, Route, useLocation } from 'react-router-dom';
import { FormTest } from './pages/FormTest';
import { Stakeeth } from './pages/StakeEth';
import { Home } from './pages/Home';

export const Routes = () => {
  const { pathname } = useLocation();
  return (
    <DHLayout
      pathname={pathname}
      navLinks={[
        { label: 'Home', href: '/' },
        { label: 'Form Test', href: '/formtest' },
        { label: 'Stake Eth', href: '/StakeEth'}
      ]}
    >
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/formtest" element={<FormTest />} />
        <Route path="/StakeEth" element={<Stakeeth />} />
      </Router>
    </DHLayout>
  );
};
