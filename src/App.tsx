import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ManageCookieModal from "./components/desktop/ManageCookieModal";
import SettingCookieModal from "./components/desktop/SettingCookieModal";
import { useCookies } from 'react-cookie';

import Home from './pages/Home'
import Main from './pages/Main'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import FollowUp from './pages/FollowUp'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermofUse"
import HouseRules from './pages/HouseRules'

function App() {
  const [showManageModal, setShowManageModal] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(['policy']);
  const openManageModal = (closed: boolean) => {
    setShowManageModal(closed);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opt-in" element={<Main />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/products' element={<Product />} />
          <Route path='/follow-up' element={<FollowUp />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
          <Route path='/houserules' element={<HouseRules />} />
        </Routes>
        {
          !cookies.policy && <>
            <SettingCookieModal
              opened={true}
              openManageModal={(closed: boolean) => openManageModal(closed)}
            />
            <ManageCookieModal opened={showManageModal} />
          </>
        }
      </BrowserRouter>
      <ToastContainer autoClose={5000}
        theme="colored"
        className="toast-container"
        toastClassName="dark-toast"/>
    </>
  );
}

export default App;
