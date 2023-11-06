import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contactus = React.lazy(() => import("pages/Contactus"));
const Design = React.lazy(() => import("pages/Design"));
const Information = React.lazy(() => import("pages/Information"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Profile = React.lazy(() => import("pages/Profile"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/information" element={<Information />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
