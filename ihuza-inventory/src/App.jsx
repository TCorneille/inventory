import Head from './Components/Head';
import Navigation from './Components/Navigation';
import System from './Components/System';
import { useTheme } from './hooks/useThemes';

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
        <main className="w-4/5 py-6 bg-white dark:bg-white text-black dark:text-white">
          <Head />
            <div className='flex justify-center bg-primaryColor-600'>
             <System/>
            </div>

          
        </main>
      </div>
     
    </div>
  );
}

export default App;

