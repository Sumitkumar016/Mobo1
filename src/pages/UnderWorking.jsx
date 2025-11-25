import '../App.css'
import { Construction } from 'lucide-react'
import { Link } from "react-router-dom"

export function UnderWorking() {
  return (
    <section className='pt-60'>
        <div className="flex flex-col items-center justify-center">
        <div className="text-white bg-gradient-to-br from-purple-500 to-blue-600 text-center rounded-3xl px-8 py-6 text-2xl md:p-20 md:text-7xl">
          <div className='flex flex-col gap-2 md:gap-10 md:flex-row justify-center items-center'>
              The Page is UnderWorking <Construction className='hidden md:flex text-yellow-500 ' size={76} strokeWidth={1.25} /><Construction className='flex md:hidden text-yellow-500 ' size={60} strokeWidth={1.25} />
          </div>
        </div>
        <div className='mt-5 md:mt-8 hover:underline text-xl'>
              <Link to='/'>Back to Home </Link>
          </div>
      </div>
    </section>
  )
}