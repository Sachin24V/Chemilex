import { Routes, Route } from "react-router-dom";
import { route } from "../globals/constants";
import Home1Page from "../app/components/home/home1";
import Home2Page from "../app/components/home/home2";
import Home3Page from "../app/components/home/home3";

import InnerPageLayout from "../layouts/inner-page-layout";
import AboutUsPage from "../app/components/pages/about-us";
import FAQPage from "../app/components/pages/faq";
import TeamPage from "../app/components/pages/team/team";
import TeamDetailPage from "../app/components/pages/team/detail";
import ContactUs1Page from "../app/components/pages/contact/contact-us1";
import ContactUs2Page from "../app/components/pages/contact/contact-us2";
import Gallery1Page from "../app/components/pages/gallery/gallery1";
import Gallery2Page from "../app/components/pages/gallery/gallery2";
import FeaturesPage from "../app/components/pages/features/features";
import Error404 from "../app/components/pages/error404";

import ServicesPage from "../app/components/services/services";
import ServiceDetailPage from "../app/components/services/detail";

import BlogListPage from "../app/components/blog/list";
import BlogListSidebarPage from "../app/components/blog/list-sidebar";
import BlogGridPage from "../app/components/blog/grid";
import BlogGridSidebarPage from "../app/components/blog/grid-sidebar";
import BlogPostSinglePage from "../app/components/blog/post-single";

import ShopProductsPage from "../app/components/shop/products";
import ShopProductDetailPage from "../app/components/shop/detail";
import ShopCartPage from "../app/components/shop/cart";
import ShopWishlistPage from "../app/components/shop/wishlist";
import ShopChekoutPage from "../app/components/shop/checkout";

import ElementsPage from "../app/components/elements";
import { Inquiry } from "../app/components/pages/Inquiry";
import Products from "../app/components/pages/Products";
import LimeProduct from "../app/components/pages/Products-Details/LimeProduct";
import ImportedIndianCoalCokes from "../app/components/pages/Products-Details/ImportedIndianCoalCokes";
import IndianImportedCoal from "../app/components/pages/Products-Details/IndianImportedCoal";
import { IndianImportedCoke } from "../app/components/pages/Products-Details/IndianImportedCoke";
import ImportedCoal from "../app/components/pages/Products-Details/ImportedCoal";
import IndianCoalGrade from "../app/components/pages/Products-Details/IndianCoalGrade";
import PrimeHardCookingCoal from "../app/components/pages/SubDetailsPage/PrimeHardCookingCoal";
import IndonesianSteamCoal from "../app/components/pages/SubDetailsPage/IndonesianSteamCoal";
import PCICoal from "../app/components/pages/SubDetailsPage/PCICoal";
import AnthraciteCoal from "../app/components/pages/SubDetailsPage/AnthraciteCoal";
import IndonesianMetCoke from "../app/components/pages/SubDetailsPage/IndonesianMetCoke";
import ChinaMetCoke from "../app/components/pages/SubDetailsPage/ChinaMetCoke";
import ColombianMetCoke from "../app/components/pages/SubDetailsPage/ColombianMetCoke";
import ColombianULP from "../app/components/pages/SubDetailsPage/ColombianULP";
import IndianLAMCoke from "../app/components/pages/SubDetailsPage/IndianLAMCoke";
import { OtherMiningProducts } from "../app/components/pages/Products-Details/OtherMiningProducts";
import ChromeConcentrate from "../app/components/pages/SubDetailsPage/ChromeConcentrate";
import Gypsum from "../app/components/pages/SubDetailsPage/Gypsum";
import ImportedMagnesesOre from "../app/components/pages/SubDetailsPage/ImportedMagnesesOre";
import { LogisticTransport } from "../app/components/pages/Products-Details/Logistics&Transport";
import RoadTransport from "../app/components/pages/SubDetailsPage/RoadTransport";
import RailTransport from "../app/components/pages/SubDetailsPage/RailTransport";
import SouthAfricanSteamCoal from "../app/components/pages/SubDetailsPage/SouthAfricanSteamCoal";
import HydratedLimePowder from "../app/components/pages/SubDetailsPage/HydratedLimePowder";
import QuickLimePowder from "../app/components/pages/SubDetailsPage/QuickLimePowder";
import QuickLimeStone from "../app/components/pages/SubDetailsPage/QuickLimeStone";
import QuickLimeLumps from "../app/components/pages/SubDetailsPage/QuickLimeLumps";
import { Career } from "../app/components/pages/Career";
import { Clients } from "../app/components/pages/Clients";

function AppRoutes() {
  return (
    <Routes>
      <Route path={route.INITIAL} element={<Home1Page />} />

      <Route path={route.home.HOME1} element={<Home1Page />} />
      <Route path={route.home.HOME2} element={<Home2Page />} />
      <Route path={route.home.HOME3} element={<Home3Page />} />
      <Route path={route.pages.ABOUT} element={<AboutUsPage />} />
      {/* <Route
        path={route.pages.ABOUT}
        element={<InnerPageLayout content={<AboutUsPage />} />}
      /> */}

      {/* my Products details Page routing */}

      <Route
        path={route.Products.PRODUCT}
        element={<InnerPageLayout content={<Products />} />}
      />

      <Route
        path={route.Products.LimeProduct}
        element={<InnerPageLayout content={<LimeProduct />} />}
      />
      <Route
        path={route.Products.HydratedLimePowder}
        element={ <HydratedLimePowder /> }
      />
      <Route
        path={route.Products.QuickLimePowder}
        element={ <QuickLimePowder />  }
      />
      <Route
        path={route.Products.QuickLimeStone}
        element={ <QuickLimeStone />}
      />
      <Route
        path={route.Products.QuickLimeLumps}
        element={ <QuickLimeLumps />  }
      />
      <Route
        path={route.Products.ImportedIndianCoalCokes}
        element={<InnerPageLayout content={<ImportedIndianCoalCokes />} />}
      />
      <Route
        path={route.Products.IndianImportedCoal}
        element={<InnerPageLayout content={<IndianImportedCoal />} />}
      />
      <Route
        path={route.Products.IndianImportedCoke}
        element={<InnerPageLayout content={<IndianImportedCoke />} />}
      />
      <Route
        path={route.Products.ImportedCoal}
        element={<InnerPageLayout content={<ImportedCoal />} />}
      />
      <Route
        path={route.Products.IndianCoalGrade}
        element={ <IndianCoalGrade /> }
      />
      <Route
        path={route.Products.PrimeHardCookingCoal}
        element={ <PrimeHardCookingCoal /> }
      />
      <Route
        path={route.Products.IndonesianSteamCoal}
        element={ <IndonesianSteamCoal /> }
      />
      <Route
        path={route.Products.SouthAfricanSteamCoal}
        element={ <SouthAfricanSteamCoal /> }
      />
      <Route
        path={route.Products.PCICoal}
        element={ <PCICoal /> }
      />
      <Route
        path={route.Products.AnthraciteCoal}
        element={ <AnthraciteCoal /> }
      />
      <Route
        path={route.Products.IndonesianMetCoke}
        element={ <IndonesianMetCoke /> }
      />
      <Route
        path={route.Products.ChinaMetCoke}
        element={ <ChinaMetCoke /> }
      />
      <Route
        path={route.Products.ColombianMetCoke}
        element={ <ColombianMetCoke /> }
      />
      <Route
        path={route.Products.ColombianULP}
        element={ <ColombianULP /> }
      />
      <Route
        path={route.Products.IndianLAMCoke}
        element={ <IndianLAMCoke /> }
      />
      <Route
        path={route.Products.OtherMiningProducts}
        element={<InnerPageLayout content={<OtherMiningProducts />} />}
      />
      <Route
        path={route.Products.ChromeConcentrate}
        element={ <ChromeConcentrate /> }
      />
      <Route
        path={route.Products.Gypsum}
        element={ <Gypsum /> }
      />
      <Route
        path={route.Products.ImportedMagnesesOre}
        element={ <ImportedMagnesesOre /> }
      />
      <Route
        path={route.Products.LogisticTransport}
        element={<InnerPageLayout content={<LogisticTransport />} />}
      />
      <Route
        path={route.Products.RoadTransport}
        element={ <RoadTransport />  }
      />
      <Route
        path={route.Products.RailTransport}
        element={ <RailTransport />}
      />

      {/* end my Products details Page routing */}

      {/* career and ourclients routing  */}

      <Route
        path={route.Career.CAREER}
        element={<InnerPageLayout content={<Career />} />}
      />
      <Route
        path={route.Career.Clients}
        element={<InnerPageLayout content={<Clients />} />}
      />
      <Route
        path={route.pages.FAQ}
        element={<InnerPageLayout content={<FAQPage />} />}
      />
      <Route
        path={route.pages.team.TEAM}
        element={<InnerPageLayout content={<TeamPage />} />}
      />
      <Route
        path={route.pages.team.DETAIL}
        element={<InnerPageLayout content={<TeamDetailPage />} />}
      />
      <Route
        path={route.pages.contact.CONTACT1}
        element={<InnerPageLayout content={<ContactUs1Page />} />}
      />
      <Route
        path={route.pages.contact.CONTACT2}
        element={<InnerPageLayout content={<ContactUs2Page />} />}
      />
      <Route
        path={route.pages.contact.Inquiry}
        element={<InnerPageLayout content={<Inquiry />} />}
      />
      <Route
        path={route.pages.gallery.GALLERY1}
        element={<InnerPageLayout content={<Gallery1Page />} />}
      />
      <Route
        path={route.pages.gallery.GALLERY2}
        element={<InnerPageLayout content={<Gallery2Page />} />}
      />
      <Route
        path={route.pages.features.footer.FIXED}
        element={<InnerPageLayout content={<FeaturesPage />} />}
      />
      <Route
        path={route.pages.features.footer.LIGHT}
        element={<InnerPageLayout content={<FeaturesPage />} />}
      />
      <Route
        path={route.pages.features.footer.DARK}
        element={<InnerPageLayout content={<FeaturesPage />} />}
      />
      <Route
        path={route.services.SERVICES}
        element={<InnerPageLayout content={<ServicesPage />} />}
      />
      <Route
        path={route.services.DETAIL}
        element={<InnerPageLayout content={<ServiceDetailPage />} />}
      />
      <Route
        path={route.blog.LIST}
        element={<InnerPageLayout content={<BlogListPage />} />}
      />
      <Route
        path={route.blog.LIST_SIDEBAR}
        element={<InnerPageLayout content={<BlogListSidebarPage />} />}
      />
      <Route
        path={route.blog.GRID}
        element={<InnerPageLayout content={<BlogGridPage />} />}
      />
      <Route
        path={route.blog.GRID_SIDEBAR}
        element={<InnerPageLayout content={<BlogGridSidebarPage />} />}
      />
      <Route
        path={route.blog.POST_SINGLE}
        element={<InnerPageLayout content={<BlogPostSinglePage />} />}
      />
      <Route
        path={route.shop.PRODUCTS}
        element={<InnerPageLayout content={<ShopProductsPage />} />}
      />
      <Route
        path={route.shop.DETAIL}
        element={<InnerPageLayout content={<ShopProductDetailPage />} />}
      />
      <Route
        path={route.shop.CART}
        element={<InnerPageLayout content={<ShopCartPage />} />}
      />
      <Route
        path={route.shop.WISHLIST}
        element={<InnerPageLayout content={<ShopWishlistPage />} />}
      />
      <Route
        path={route.shop.CHECKOUT}
        element={<InnerPageLayout content={<ShopChekoutPage />} />}
      />
      <Route
        path={route.ELEMENTS}
        element={<InnerPageLayout content={<ElementsPage />} />}
      />
      <Route path="*" element={<InnerPageLayout content={<Error404 />} />} />
    </Routes>
  );
}
export default AppRoutes;
