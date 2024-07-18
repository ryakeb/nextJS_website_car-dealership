import { useState } from "react"
import Link from "next/link";

export default function Login() {
    const [validMail, setValidMail] = useState(false)
    const validateMail = () => {
        const emailInput = document.getElementById("emailInput");
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour vérifier l'adresse email

        if (regex.test(emailInput.value)) {
            setValidMail(true)
        } else {
            setValidMail(false)
        }
    }

    return (
        <div className="pt-28 md:mt-20 h-screen">
            <form onSubmit={(e) => { e.preventDefault(); }}
                className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col gap-5">
                    <label className="block mb-1 text-base font-mono text-white ">Email address : </label>
                    <input type="text" id='emailInput' className="w-[300px] outline-none border border-gray-300 rounded px-5 py-3" placeholder="E-mail" autoComplete="off" />
                    <input type="password"  className="w-[300px] outline-none border border-gray-300 rounded px-5 py-3" placeholder="Password" />
                </div>
                <div>
                    {
                        validMail ? <Link href="/cart/cart/">
                            <button type="submit"
                                className="carbon w-[300px] h-14 text-white py-2 px-4 rounded font-mono">
                                Go To Cart !
                            </button>
                        </Link>
                            : <button onClick={() => { validateMail(); }}
                                type="submit"
                                className="carbon w-[300px] h-14 text-white py-2 px-4 rounded font-mono hover:bg-white/25">
                                Check Mail
                            </button>
                    }
                </div>
            </form>
        </div>
    )
}
