import Vue from "vue";
import Router from "vue-router";
import X25604k from "./components/X25604k";
import X320Mobile from "./components/X320Mobile";
import X768Tablet from "./components/X768Tablet";
import X1440BigLaptop from "./components/X1440BigLaptop";
import X1024Laptop from "./components/X1024Laptop";
import { x25604kData, x320MobileData, x768TabletData, x1440BigLaptopData, x1024LaptopData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/u8595-2560-4k",
      component: X25604k,
      props: { ...x25604kData },
    },
    {
      path: "/u8595-320-mobile",
      component: X320Mobile,
      props: { ...x320MobileData },
    },
    {
      path: "/u8595-768-tablet",
      component: X768Tablet,
      props: { ...x768TabletData },
    },
    {
      path: "/u8595-1024-laptop",
      component: X1024Laptop,
      props: { ...x1024LaptopData },
    },
    {
      path: "*",
      component: X1440BigLaptop,
      props: { ...x1440BigLaptopData },
    },
  ],
});
