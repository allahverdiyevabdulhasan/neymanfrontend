import About from "../pages/Site/About/About";
import Blogs from "../pages/Site/Blogs/Blogs";
import Contact from "../pages/Site/Contact/Contact";
import Home from "../pages/Site/Home/Home";
import Price from "../pages/Site/Price/Price";
import Project from "../pages/Site/Project/Project";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
// import Faq from "../pages/Site/Faq/Faq";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Accordion from "../pages/Site/Accordion/Accordion";
import ServiceProperty from "../pages/Site/Service/ServiceProperty/ServiceProperty";
// import ServicePropertyDetails from "../pages/Site/Service/ServicePropertyDetails/ServicePropertyDetails";
import ServiceCards from "../Components/Home/ServiceCards/ServiceCards";

// import Pagination from "../Components/pagination/pagination";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
     
      {
        path: "/services",
        element: <ServiceCards/>,
      },
    {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services_property/:slug",
        element: <ServiceProperty/>,
      },
  
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    
     
      {
        path: "/blogs/:slug",
        element: <BlogDetails />,
      },
     
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Accordion />,
      },
     
    ],
  },
];
