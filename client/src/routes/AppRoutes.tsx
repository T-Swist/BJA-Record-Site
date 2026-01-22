import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultSkeletion from '../components/DefaultSkeleton';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import ProtectedRoute from '../components/ProtectedRoute';

// Public pages
const Home = lazy(() => import("../pages/Home"));
const OurStory = lazy(() => import("../pages/OurStory"));
const Services = lazy(() => import("../pages/Services"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Tickets = lazy(() => import("../pages/Tickets"));
const Merch = lazy(() => import("../pages/Merch"));
const Podcast = lazy(() => import("../pages/Podcast"));
const Membership = lazy(() => import("../pages/Membership"));
const ComingSoonPage = lazy(() => import("../pages/ComingSoonPage"));

// Admin pages
const AdminLogin = lazy(() => import("../pages/admin/Login"));
const AdminDashboard = lazy(() => import("../pages/admin/Dashboard"));
const AdminArtists = lazy(() => import("../pages/admin/Artists"));
const AdminProjects = lazy(() => import("../pages/admin/Projects"));
const AdminNews = lazy(() => import("../pages/admin/News"));

 const AppRoutes = () => {
   return (
     <Suspense fallback={<DefaultSkeletion />}>
       <ScrollToTop />
       <Routes>
         {/* Admin Routes - Non-obvious URL */}
         <Route path="/bja-control-panel" element={<AdminLogin />} />
         <Route path="/bja-control-panel/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
         <Route path="/bja-control-panel/artists" element={<ProtectedRoute><AdminArtists /></ProtectedRoute>} />
         <Route path="/bja-control-panel/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>} />
         <Route path="/bja-control-panel/news" element={<ProtectedRoute><AdminNews /></ProtectedRoute>} />

         {/* Public Routes */}
         <Route path="*" element={
           <>
             <Header />
             <div className="min-h-screen flex flex-col bg-transparent">
               <main className="flex-grow">
                 <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/our-story" element={<OurStory />} />
                   <Route path="/coming-soon" element={<ComingSoonPage />} />
                   <Route path="/services" element={<Services />} />
                   <Route path="/gallery" element={<Gallery />} />
                   <Route path="/tickets" element={<Tickets />} />
                   <Route path="/merch" element={<Merch />} />
                   <Route path="/podcast" element={<Podcast />} />
                   <Route path="/membership" element={<Membership />} />
                 </Routes>
               </main>
             </div>
             <WhatsAppButton />
             <Footer />
           </>
         } />
       </Routes>
     </Suspense>
   )
 }

 export default AppRoutes