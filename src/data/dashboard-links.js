import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard/home",
    icon: "VscHome",
  },
  {
    id: 2,
    name: "Employee Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 3,
    name: "Choice Available",
    path: "/dashboard/choice-available",
    icon: "VscDashboard",
  },
  {
    id: 4,
    name: "Choice Filling",
    path: "/dashboard/choice-filling",
    icon: "VscClearAll",
  },
  {
    id: 5,
    name: "Choice Locking",
    path: "/dashboard/choice-locking",
    icon: "VscLock",
  },

  {
    id: 6,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 7,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 8,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 9,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 10,
    name: "Your Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
];
