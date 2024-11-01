import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
 return (
  <section className="bg-[rgb(243,243,243)] min-h-screen py-12 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-6xl"> {/* Added max-width and increased container width */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16"> {/* Increased space between image and content */}
        <div className="w-full md:w-5/12 max-w-lg"> {/* Increased max-width for larger image */}
          <Image 
            src="/Baron.webp" 
            alt="Dalya Baron" 
            width={560} 
            height={560} 
            className="rounded-full w-full h-auto"
            priority
          />
        </div>
        <div className="w-full md:w-7/12 max-w-2xl flex flex-col items-start text-left">
          <h1 className="text-5xl font-extrabold mb-6">Dalya Baron</h1> {/* Increased size and weight */}
          <h2 className="text-2xl font-semibold mb-4">A Bit About Me</h2>
          <div className="mb-6 max-w-[45ch]">
            <p className="bg-white p-4 rounded-lg">
              I am a Carnegie-Princeton fellow working in Carnegie Observatories. I am interested in observational galaxy evolution, supermassive black holes, application of machine learning algorithms to astronomical datasets, and the interstellar medium.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/resume" className="bg-blue-600 text-white w-20 h-20 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors border-2 border-[rgb(151,138,110)] hover:border-blue-900">
              <span className="text-sm font-medium">Resume</span>
            </Link>
            <Link href="/research" className="bg-green-600 text-white w-20 h-20 flex items-center justify-center rounded-full hover:bg-green-700 transition-colors border-2 border-[rgb(151,138,110)] hover:border-green-900">
              <span className="text-sm font-medium">Research</span>
            </Link>
            <Link href="/outreach" className="bg-yellow-600 text-white w-20 h-20 flex items-center justify-center rounded-full hover:bg-yellow-700 transition-colors border-2 border-[rgb(151,138,110)] hover:border-yellow-900">
              <span className="text-sm font-medium">Outreach</span>
            </Link>
            <Link href="/personal" className="bg-red-600 text-white w-20 h-20 flex items-center justify-center rounded-full hover:bg-red-700 transition-colors border-2 border-[rgb(151,138,110)] hover:border-red-900">
              <span className="text-sm font-medium">Personal</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}
