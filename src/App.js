import './App.css';
import Header from './components/Header';
import { XIcon, MenuIcon } from "@heroicons/react/solid"
import { useState } from 'react';
import Menu from './components/Menu';

function App() {
  const [open, setOpen] = useState(false);
  let arr = ["1", "2", "3"]
  return (
    <div className="max-w-5xl mx-auto p-2 relative">
      <MenuIcon className={`w-6 h-6 lg:hidden sticky top-1`} onClick={() => setOpen(true)} />
      <Header />
      <Header />
      <Header />
      <Menu open={open} setOpen={setOpen} />
      <div className='max-w-full bg-red-500 h-52 flex-wrap flex-col mt-5 flex justify-center items-center'>
        <div className='break-normal bg-blue-700'>
          dfjghirgbuhgpsrogt7hr
          yndghidghdrydrtdvfgridsrt
        </div>
        <div className='break-normal bg-blue-500'>
          lsfshyierselrsehy
          irouesurgeiyyfgftsigfry
          sudhfysogdoydgftsigfsfs</div>
        <div className='break-normal bg-blue-300'>lsfshyierselrsehyirouesurgeiy</div>
      </div>
      <p className='break-normal'>
        jhhfgrsuy7hgf7rohtr7htfr7fgf
        rgt6gt76erfoer4ris46rssyfrhogeyrgtei
      </p>
      <div className='flex flex-col space-y-2 bg-slate-200 p-3 rounded-lg'>
        <p>Spring Development:</p>
        <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
          <div className="bg-blue-600 h-5 rounded-full" style={{ "width": "90%" }}></div>
        </div>
      </div>
      {arr.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default App;
