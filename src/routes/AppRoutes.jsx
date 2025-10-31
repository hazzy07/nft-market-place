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
// import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tokens" element={<Tokens />} />
          <Route path="/Calender" element={<Calendar />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Reward" element={<Reward />} />
          <Route path="/Studio" element={<Studio />} />
          <Route path="/Help" element={<Help />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
