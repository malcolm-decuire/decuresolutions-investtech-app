import Image from 'next/image'

import { Buttoncta } from '@/components/Buttoncta'
import { Containercta } from '@/components/Containercta'
import backgroundImage from '@/images/logos/background_cta.jpg'


export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Containercta className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get Started
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Learn more about Decure Solutions Corp
          </p>
          <Buttoncta href="https://calendly.com/malcolm-decuire" color="white" className="mt-10">
            Calendly
          </Buttoncta>
        </div>
      </Containercta>
    </section>
  )
}
