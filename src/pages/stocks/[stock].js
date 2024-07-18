import { useRouter } from 'next/router'
import Map from '@/components/map';
import { useState, useEffect } from 'react';


export default function Stock({ car }) {
    const router = useRouter()
    const { stock } = router.query
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center py-2 items-center font-mono">
                <span class="loader"></span>
            </div>
        )
    }
    return (
        <div className="min-h-screen py-2 font-mono">
            <div className="container mx-auto px-4">
                <div className="relative w-full lg:h-[420px]">
                    <div className="mt-6 lg:absolute lg:inset-x-0 md:w-full p-6 lg:p-12">
                        <div className="flex flex-col text-center items-center rounded-lg shadow md:gap-4 lg:gap-8 xl:gap-10 md:max-w-xl lg:max-w-4xl mx-auto gap-4">
                            <h5 className="mb-2 text-2xl italic xl:text-5xl lg:text-4xl  tracking-tight  text-white">
                                {car.make_id}&nbsp;-&nbsp;{car.model}
                            </h5>
                            <p className="hidden mb-3 text-gray-400 xl:text-xl  md:block">
                                {car.description}
                            </p>
                            <p className="block mb-3 text-base xl:text-xltext-white md:hidden">
                                {car.color} {car.state}
                            </p>
                            <div className="flex gap-10 text-md text-white">
                                <p className="mb-3  xl:text-xl ">
                                    {car.price}$
                                </p>
                                <p className="mb-3 text-base italic xl:text-xl ">
                                    {car.year}'
                                </p>
                                <p className="mb-3 text-base text-gray-400 font-light italic xl:text-xl">
                                    {car.color}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 md:h-96 mt-6 lg:mt-20 rounded-lg md:mb-28 lg:h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${car.image})` }}>
            </div>


            <div className="flex flex-col font-thin items-center gap-4 md:gap-5 lg:gap-5 xl:text-3xl lg:text-xl px-10 lg:py-10 md:text-xl md:pb-8 py-6 justify-around">
                <h1 className="text-white text-xl lg:text-2xl">{car.state}</h1>
                <p className="text-white text-md md:text-xl lg:text-2xl">{car.city}&nbsp;{car.postal}</p>
                {/* <h1 className="text-white">{car.postal}</h1> */}
                <div className="lg:pt-10">
                    <Map latitude={car.latitude} longitude={car.longitude} />
                </div>

            </div>
        </div>

    );
}
export async function getStaticPaths() {
    const data = await fetch("https://example-data.draftbit.com/cars")
    const cars = await data.json()

    const paths = cars.map((car) => ({
        params: { stock: car.vin },
    }))
    return {
        paths,
        //  fallback: true 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await fetch("https://example-data.draftbit.com/cars")
    const cars = await data.json()

    const car = cars.find((car) => car.vin === params.stock)
    return { props: { car: car } }
}

