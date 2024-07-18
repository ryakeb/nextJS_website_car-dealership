import Card from "@/components/card"
import Link from "next/link";

export default function index({ cars }) {
    console.log(cars);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="lg:text-2xl text-xl text-gray-300 font-mono py-20">Where the wheels of the past meet the deals of the present..</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
                {cars.map((car, index) => (
                    <Link href={`/oldTimer/${car.vin}`}><Card key={index} car={car} /></Link>
                ))}
            </div>
        </div>
    )
}
export async function getStaticProps() {
    const data = await fetch('https://example-data.draftbit.com/cars');
    const cars = await data.json();

    const ninetiesCars = cars.filter(car => car.year >= 1990 && car.year <= 1999);
    return {
        props: {
            cars: ninetiesCars,
        },
    }
}
