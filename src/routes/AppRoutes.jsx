import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/primary/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Tokens from "../pages/Tokens";
import Calendar from "../pages/Calender";
import Activity from "../pages/Activity";
import Reward from "../pages/Reward";
import Studio from "../pages/Studio";
import Help from "../pages/Help";
import Funkari from "../pages/Funkari";
import Account from "../pages/Account";

import HelpDeveloper from "../components/help/HelpDeveloper";
import HelpContent from "../components/help/HelpContent";
import HelpMail from "../components/help/HelpMail";
import HelpVerification from "../components/help/HelpVarification";
import HelpWallet from "../components/help/HelpWallet";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Profile />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/studio" element={<Studio />} />

          {/* HELP nested routes */}
          <Route path="/help" element={<Help />}>
            <Route index element={<HelpContent />} />
            <Route path="developer" element={<HelpDeveloper />} />
            <Route path="wallet" element={<HelpWallet />} />
            <Route path="verification" element={<HelpVerification />} />
            <Route path="mail" element={<HelpMail />} />
          </Route>

          <Route path="/funkari" element={<Funkari />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
