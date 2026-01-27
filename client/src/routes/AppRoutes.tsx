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
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));
const Terms = lazy(() => import("../pages/Terms"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Refund = lazy(() => import("../pages/Refund"));
const SocialClub = lazy(() => import("../pages/SocialClub"));
const Artists = lazy(() => import("../pages/Artists"));
const ArtistProfile = lazy(() => import("../pages/ArtistProfile"));
const Discography = lazy(() => import("../pages/Discography"));

// Admin pages
const AdminLogin = lazy(() => import("../pages/admin/Login"));
const AdminLayout = lazy(() => import("../components/admin/AdminLayout"));
const DashboardHome = lazy(() => import("../pages/admin/DashboardHome"));
const AdminArtists = lazy(() => import("../pages/admin/Artists"));
const AdminProjects = lazy(() => import("../pages/admin/Projects"));
const AdminNews = lazy(() => import("../pages/admin/News"));
const BlogAdmin = lazy(() => import("../pages/admin/BlogAdmin"));
const ContactsAdmin = lazy(() => import("../pages/admin/ContactsAdmin"));
const NewsletterAdmin = lazy(() => import("../pages/admin/NewsletterAdmin"));
const EventsAdmin = lazy(() => import("../pages/admin/EventsAdmin"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<DefaultSkeletion />}>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes - Non-obvious URL */}
        <Route path="/bja-control-panel" element={<AdminLogin />} />
        <Route path="/bja-control-panel/*" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="artists" element={<AdminArtists />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="blog" element={<BlogAdmin />} />
          <Route path="contacts" element={<ContactsAdmin />} />
          <Route path="newsletter" element={<NewsletterAdmin />} />
          <Route path="events" element={<EventsAdmin />} />
        </Route>

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
                  <Route path="/artists" element={<Artists />} />
                  <Route path="/artists/:artistId" element={<ArtistProfile />} />
                  <Route path="/discography" element={<Discography />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/social-club" element={<SocialClub />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/merch" element={<Merch />} />
                  <Route path="/podcast" element={<Podcast />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/refund" element={<Refund />} />
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