import LowerHalf from "./LowerHalf"
import UpperHalf from "./UpperHalf"

function Sidebar() {
  return (
    <div className=" overflow-y-auto  basis-3/12 flex justify-center flex-col items-center  text-black   rounded-tl-3xl rounded-bl-3xl" style={{background: 'rgba(255,255,255,0.81'}}>
      <UpperHalf />
      <div className="h-[1px] w-[87%] bg-[#e9ecef] mt-8 rounded-md">

      </div>
      <LowerHalf />
      
    </div>
  )
}

export default Sidebar