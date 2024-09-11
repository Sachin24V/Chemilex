export const route = {
  INITIAL: "/",
  home: {
    HOME1: "/index",
    HOME2: "/index2",
    HOME3: "/index3",
  },
  pages: {
    ABOUT: "/about-us",
    FAQ: "/faq",
    team: {
      TEAM: "/team",
      DETAIL: "/team/detail",
    },
    contact: {
      CONTACT1: "/contact",
      CONTACT2: "/contact-us2",
      Inquiry: "/inquiry",
    },
    gallery: {
      GALLERY1: "/gallery1",
      GALLERY2: "/gallery2",
    },
    ERROR404: "/error404",
    features: {
      footer: {
        FIXED: "/footer/fixed",
        LIGHT: "/footer/light",
        DARK: "/footer/dark",
      },
    },
  },
  services: {
    SERVICES: "/services",
    DETAIL: "/service/detail",
    
  },
Products:{
    PRODUCT: "/product",
    LimeProduct:"/product/limeproduct",
    ImportedIndianCoalCokes:"/product/ImportedIndianCoalCokes",
    IndianImportedCoal:"/product/IndianImportedCoal",
    IndianImportedCoke:"/product/IndianImportedCoke",
    ImportedCoal:'/product/ImportedCoal',
    IndianCoalGrade:"/product/IndianCoalGrade",
    PrimeHardCookingCoal:"/product/PrimeHardCookingCoal",
    IndonesianSteamCoal:"/product/IndonesianSteamCoal",
    SouthAfricanSteamCoal:"/product/SouthAfricanSteamCoal",
    PCICoal:"/product/PCI-Coal",
    AnthraciteCoal:"/product/AnthraciteCoal",
    IndonesianMetCoke:"/product/IndonesianMetCoke",
    ChinaMetCoke:"/product/ChinaMetCoke",
    ColombianMetCoke:"/product/ColombianMetCoke",
    ColombianULP:"/product/ColombianULP",
    IndianLAMCoke:"/product/IndianLAMCoke",
    OtherMiningProducts:"/product/OtherMiningProducts",
    ChromeConcentrate:"/product/ChromeConcentrate",
    Gypsum:"/product/Gypsum",
    ImportedMagnesesOre:"/product/ImportedMagnesesOre",
    LogisticTransport:"/product/LogisticTransport",
    RoadTransport:"/product/RoadTransport",
    RailTransport:"/product/RailTransport",
    HydratedLimePowder:"/product/HydratedLime",
    QuickLimePowder:"/product/CalcinedQuickLime",
    QuickLimeStone:"/product/LimeStone",
    QuickLimeLumps:"/product/CalcinedQuickLimePowder",

},
Career:{
  CAREER: "/career",
  Clients:"/Clients"
},
  blog: {
    LIST: "/blog/list",
    LIST_SIDEBAR: "/blog/list-sidebar",
    GRID: "/blog/grid",
    GRID_SIDEBAR: "/blog/grid-sidebar",
    POST_SINGLE: "/blog/post-single",
  },
  shop: {
    PRODUCTS: "/shop/products",
    DETAIL: "/shop/detail",
    CART: "/shop/cart",
    WISHLIST: "/shop/wishlist",
    CHECKOUT: "/shop/checkout",
  },
  ELEMENTS: "/elements",
};

export function publicUrlFor(path) {
  return process.env.PUBLIC_URL + "/assets/" + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });

    setTimeout(() => {
      document.body.removeChild(script);
    }, 1500);
    document.body.appendChild(script);
  });
}
