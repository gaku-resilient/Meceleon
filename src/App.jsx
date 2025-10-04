
// export default App;
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

import Layout from './components/Layout/Layout';
// import Admindash from './components/Layout/admindashboard.jsx';
// import Adminlogin from './components/Layout/adminlogin.jsx';
import Home from './pages/HomeSection.jsx';
// import About from './pages/About.jsx'
// import Services from './pages/Services.jsx';
// import Contact from './pages/contact.jsx'
// import Team from './pages/Teams.jsx'
// import Blogs from './pages/blogs.jsx'
// import Adminblog from './components/Layout/adminblog.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
      children: [
        { path: '/', index: true, element: <Home /> },
        // { path: '/about', index: true, element: <About /> },
        // { path: '/services', index: true, element: <Services /> },
        // { path: '/contact', index: true, element: <Contact /> },
        // { path: '/team', index: true, element: <Team /> },
        // { path: '/blogs', index: true, element: <Blogs /> },
  
   

        
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enable v7 behavior for splat routes
    },
  }
);

const App = () => {
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <RouterProvider router={router} />
      </div>
  );
};

export default App;