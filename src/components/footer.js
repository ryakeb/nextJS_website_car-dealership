export default function Footer() {
    return (
      <footer className="bg-test2 text-white lg:py-[50px] font-mono">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-sm font-semibold mb-4 lg:text-lg text-red-700">Our Cars</h3>
              <ul className="text-xs lg:text-base">
                <li className="mb-2">Sports Car</li>
                <li className="mb-2">Old Timers</li>
                <li className="mb-2">Luxurous Cars</li>
                <li className="mb-2">Vintage Cars</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 lg:text-lg text-red-700">Company</h3>
              <ul className="text-xs lg:text-base">
                <li className="mb-2">About Us</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 lg:text-lg text-red-700">Contact Us</h3>
              <ul className="text-xs lg:text-base">
                <li className="mb-2">Phone: +(420) 069-741</li>
                <li className="mb-2">Email: info@OasisAuto.com</li>
                <li className="mb-2">Address: Place de la minoterie 10</li>
                <li className="mb-2">Automotive Cohen and Ken LLC N69420 </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs lg:text-sm">
              &copy; Where our cars and deals are
              Ryad-iculously awesome!
            </p>
          </div>
        </div>
      </footer>
    );
  }
  

