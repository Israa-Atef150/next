import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaList, FaLock, FaHeart, FaSignOutAlt, FaUser, FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../../../assets/imgs/logo.jpg";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={` top-0 right-0 h-screen bg-gray-900 text-white transition-all shadow-lg border-l-4 border-orange-500 ${collapsed ? "w-20" : "w-64"}`}>
      {/* اللوجو + زر الفتح والإغلاق */}
      <div className="flex items-center p-4 border-b border-gray-700 justify-end">
        {!collapsed && <img src={Logo} alt="شعار" className="h-10 w-10 rounded-full mr-2" />}
        <button onClick={() => setCollapsed(!collapsed)} className="text-white text-2xl">
          {collapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      
      {/* القائمة */}
      <nav className="mt-5 space-y-3">
        {menuItems.map(({ path, label, icon }) => {
          const IconComponent = icon;
          return (
            <NavLink to={path} key={label} className="flex items-center gap-2 p-3 rounded-md mx-2 transition-all flex-row-reverse text-right group">
              <IconComponent className="text-xl text-orange-500 ml-2" />
              {!collapsed && <span className="group-hover:bg-orange-500 px-2 py-1 rounded-md">{label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

const menuItems = [
  { path: "/dashboard/home", label: "الرئيسية", icon: FaHome },
  { path: "/dashboard/courses", label: "الدورات", icon: FaBookOpen },
  { path: "/dashboard/users", label: "المستخدمون", icon: FaUser },
  { path: "/dashboard/categories", label: "التصنيفات", icon: FaList },
  { path: "/dashboard/userFavourites", label: "المفضلة", icon: FaHeart },
  { path: "/dashboard/change-password", label: "تغيير كلمة المرور", icon: FaLock },
  { path: "/dashboard/logout", label: "تسجيل الخروج", icon: FaSignOutAlt },
];

export default SideBar;
