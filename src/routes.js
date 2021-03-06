/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";
import Templates from "views/Templates.js";

var routes = [
  {
    path: "/dashboard",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "My Documents",
    icon: "nc-icon nc-single-copy-04",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "My Reports",
    icon: "nc-icon nc-chart-bar-32",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "My Subscriptions",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/templates",
    name: "My Templates",
    icon: "nc-icon nc-tile-56",
    component: Templates,
    layout: "/admin",
  },

];
export default routes;
