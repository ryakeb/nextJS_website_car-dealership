import Card from "@/components/card"
import Link from "next/link";
import Searchbar from '@/components/searchbar';
import { useState } from "react";


export default function index({ cars }) {
    const [allCars, setAllCars] = useState(cars);
    const [carSearch, setCarSearch] = useState(cars);

    function handleSearch(search) {
        if (search === '') {
            setCarSearch(allCars)
        } else {
            const searchedCar = allCars.filter((car) => {
                return car.make_id.toLowerCase().includes(search.toLowerCase())
            })
            setCarSearch(searchedCar)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Searchbar onSearch={handleSearch} />
            <h1 className="lg:text-2xl text-xl text-gray-300 font-mono py-20">Where all roads lead to the perfect ride..</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
                {carSearch.map((car, index) => (
                    <Link href={`/stocks/${car.vin}`}>
                        <Card key={index} car={car} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export async function getStaticProps() {
    const data = await fetch('https://example-data.draftbit.com/cars');
    const cars = await data.json();
    return {
        props: {
            cars,
        },
    }
}
