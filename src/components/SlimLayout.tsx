import Image from 'next/image'

import backgroundImage from '@/images/logos/background_cta.jpg'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </main>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover w-full h-full"
          src={backgroundImage}
          alt=""
          layout="fill"
          unoptimized
        />
      </div>
    </div>
  )
}
