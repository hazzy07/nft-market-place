import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/primary/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
// import Tokens from "../pages/Tokens";
// import Calendar from "../pages/Calendar";
// import Activity from "../pages/Activity";
// import Reward from "../pages/Reward";
// import Studio from "../pages/Studio";
// import Help from "../pages/Help";
// import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/tokens" element={<Tokens />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
