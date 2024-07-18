import Card from "@/components/card"
import Link from "next/link";

export default function index({ cars }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="lg:text-2xl text-xl text-gray-300 font-mono py-20">Where our deals are Ryad-y for you..</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
                {cars.map((car, index) => (
                    <Link href={`/deals/${car.vin}`}><Card key={index} car={car} /></Link>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const data = await fetch('https://example-data.draftbit.com/cars');
    const cars = await data.json();

    const cheapCars = cars.filter(car => car.price <= 20000)
    return {
        props: {
            cars: cheapCars,
        }
    }
}
