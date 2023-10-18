import { AiOutlineSearch } from 'react-icons/ai';
import CloudNight from '../../Assets/Dark.jpg'

function UpperHalf() {
  return (
    <div className="max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
        <div className="flex flex-start w-full mt-8">
          {/* search bar div */}
          <input 
            type="text"
            placeholder="search..."
            className="px-2 py-2 rounded-tl-md rounded-bl-md block basis-[90%] bg-white text-black"
        />
         <button className="block basis-[10%] p-4 text-white text-lg font-semibold bg-sky-500 rounded-tr-md">
         <AiOutlineSearch />
         </button>
        </div>
        <div className='w-full h-60% flex justify-center mt-12'>
            <img 
                src={CloudNight} 
                className='w-[60%] h-full' 
            />
        </div>
        <div className='flex flex-col mt-4'>
            <div className='text-7xl text-black flex items-start'>
                <div>25.6</div>
                <div className="text-5xl mt-1">°C</div>
            </div>
            <div className='text-black text-md'>
                Friday, 9:34 
            </div>
            
        </div>
    </div>
  )
}

export default UpperHalf