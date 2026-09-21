import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import RegistrationSuccess from "./pages/RegistrationSuccess";
// import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
  import Header2 from './components/Header2';
// import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
// import AboutSection from './pages/About';
// import Services from './pages/Services';
// import Programs from './pages/Programs';
// import ProgramDetail from './pages/ProgramDetail';
// import CoWorkingSpace from './pages/CoWorkingSpace';
// import ContactPage from './pages/ContactPage';
// import Booking from './pages/Booking';
// import AgriTourismPage from './pages/AgriTourismPage';
// import InformationManagementPage from './pages/InformationManagementPage';
// import RelationshipBrokeringPage from './pages/RelationshipBrokeringPage';
// import SHFAPpage from './pages/SHFAPpage';
// import Sku2Farmpage from './pages/Sku2FarmPage';
// import SHFAPOverview from './pages/SHFAPOverview';
// import FieldCrop from './pages/FieldCrop';
// import TechMarket from './pages/TechMarket';
// import Mushroom from './pages/Mushroom';
// import InvestmentFacilitation from './pages/InvestmentFacilitation';




export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Header /> */}
      <Header2/>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration-success'  element={<RegistrationSuccess />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        {/* <Route path='/projects' element={<Projects />} /> */}
        <Route path='/post/:postSlug' element={<PostPage />} />
        {/* <Route path='/about' element={<AboutSection />} /> */}
        {/* <Route path='/services' element={<Services />} /> */}
        {/* <Route path='/programs' element={<Programs />} /> */}
        {/* <Route path='/program-detail' element={<ProgramDetail/>} /> */}
        {/* <Route path='/co-working-space' element={<CoWorkingSpace/>} /> */}
        {/* <Route path='/contact' element={<ContactPage/>} /> */}
        {/* <Route path='/book' element={<Booking/>} /> */}
        {/* <Route path='/relationship-brokering' element={<RelationshipBrokeringPage/>} /> */}
        {/* <Route path='/information-management' element={<InformationManagementPage/>} /> */}
        {/* <Route path='/agr-tourism' element={<AgriTourismPage/>} /> */}
        {/* <Route path='/shfap-page' element={<SHFAPpage/>} /> */}
        {/* <Route path='/sku2farm' element={<Sku2Farmpage/>} /> */}
        {/* <Route path='/shfap-overview' element={<SHFAPOverview/>} /> */}
        {/* <Route path='/field-crop' element={<FieldCrop/>} /> */}
        {/* <Route path='/market' element={<TechMarket/>} /> */}
        {/* <Route path='/mushroom' element={<Mushroom/>} /> */}
        {/* <Route path='/investment-facilitation' element={<InvestmentFacilitation/>} /> */}
        


      


      </Routes>
      {/* <Footer /> */}
      
    </BrowserRouter>
  );
}
