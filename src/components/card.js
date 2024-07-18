import { useState } from 'react';

export default function Card({ car }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`carbon font-mono rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform ${hover ? 'scale-105' : 'scale-100'} relative min-h-[20rem] md:min-h-[16rem]`}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="relative w-full h-48 md:h-32 lg:h-56">
        <img
          src={car.image}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 px-3 py-2 text-white bg-gradient-to-r from-slate-800 to-red-950 rounded-br-lg">
          <span className="font-semibold">{car.year}</span>
        </div>
      </div>
      <div className="p-4 md:h-auto">
        <div className='text-center'>
          <h2 className="text-xl font-semibold text-red-600">{car.make_id}</h2>
          <p className="text-gray-300">{car.model}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-lg  text-white"><span className='text-xl'>$</span>{car.price}</span><span className='text-white'>{car.state}</span>
        </div>
      </div>
    </div>
  );
}
