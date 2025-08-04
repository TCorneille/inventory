import Head from '../Components/Head'
import Navigation from '../Components/Navigation';
import System from '../Components/System';
import { useTheme } from '../hooks/useThemes';
import Stats from '../Components/Stats';
import Products from '../Components/Products';
import Users from '../Components/Users';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';


function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu);
  }
  

  return (
    <div className={` min-h-screen `}>
      <div className="flex">
        {/* Sidebar */}
        <aside className={`w-2/12 min-w-fit min-h-screen ${!menu ? "max-sm:hidden" : "max-sm:flex"} `}>
          <Navigation />
        </aside>

        {/* Main Content */}
        <main className={`w-10/12  max-sm:w-full  text-black  dark:text-white ${theme ==="light" ?"bg-white":"bg-gray-800 text-white " }`}>
          <div className=''>
            <Head
              menu={toggleMenu}
            />
          </div>

          <div className='mt-[70px] px-5'>
            <div className={`flex border rounded-lg ${theme ==="light" ?"border-gray-100":"border-gray-600 " } justify-center bg-primaryColor-600`}>
              <System />
            </div>
            <div className=''>
              <Stats />
            </div>
            <div className=''>
              <Products />
            </div>
            <div className=''>
              <Users />
            </div>
          </div>


        </main>
      </div>

    </div>
  );
}

export default Dashboard;