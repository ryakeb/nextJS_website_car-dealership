import Image from 'next/image'
import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Ryad's Auto Oasis</title>
        <meta name="description" content="Best Car Dealership in Town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/carLogo.png" />
      </Head>

      <main className="flex flex-col items-center justify-center lg:w-full flex-1 lg:px-20 text-center mt-24">
        <h1 className="lg:text-3xl xl:text-4xl text-xl font-mono italic text-white">They see me rollin..</h1>
        <div className="flex flex-col items-center justify-center lg:w-full lg:px-20 text-center mt-20">
          <Carousel>
            <div>
              <img src="/oldTimer.jpeg" alt="" className='rounded-lg' />
              <p className="legend">Lorem ipsum dolor sit amet.</p>

            </div>
            <div>
              <img src="/motoRider.jpeg" alt="image2" className='rounded-lg' />
              <p className="legend">Lorem ipsum dolor sit amet consectetur.</p>

            </div>
            <div>
              <img src="/royce.jpeg" alt="image3" className='rounded-lg' />
              <p className="legend">Lorem ipsum dolor sit.</p>

            </div>
            <div>
              <img src="/lamboOrange.jpeg" alt="image4" className='rounded-lg' />
              <p className="legend">Lorem ipsum dolor sit amet.</p>

            </div>
            <div>
              <img src="/motoFire.jpeg" alt="image5" className='rounded-lg' />
              <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

            </div>
          </Carousel>
        </div>
      </main>
    </div>
  )
}


