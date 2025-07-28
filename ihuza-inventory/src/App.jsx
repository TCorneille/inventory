import Head from './Components/Head';
import Navigation from './Components/Navigation';
import System from './Components/System';
import { useTheme } from './hooks/useThemes';
import Stats from './Components/Stats';
import Products from './Components/Products';
import Users from './Components/Users';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} min-h-screen `}>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/5 min-h-screen ">
          <Navigation />
        </aside>

        {/* Main Content */}
        <main className="w-4/5 py-6 bg-white dark:bg-white text-black gap-10 dark:text-white">
          <Head />
            <div className='flex justify-center bg-primaryColor-600'>
             <System/>
            </div>
            <div className=''>
              <Stats/>
            </div>
            <div className=''>
              <Products/>
            </div>
            <div className=''>
              <Users/>
            </div>

          
        </main>
      </div>
     
    </div>
  );
}

export default App;

