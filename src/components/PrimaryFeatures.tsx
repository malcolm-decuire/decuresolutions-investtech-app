//20240720 templated chgs
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Containercta } from '@/components/Containercta'
import background_feats from '@/images/logos/background_feats.jpg'
import decuresolutions_placeholder1 from '@/images/logos/decuresolutions_placeholder1.png'
import decuresolutions_placeholder2 from '@/images/logos/decuresolutions_placeholder2.png'
import decuresolutions_placeholder3 from '@/images/logos/decuresolutions_placeholder3.png'
import decuresolutions_placeholder4 from '@/images/logos/decuresolutions_placeholder4.png'

const features = [
  {
    title: 'Feature A',
    description:
      "Nunc euismod dapibus facilisis. Integer non sodales turpis.",
    image: decuresolutions_placeholder1,
  },
  {
    title: 'Feature B',
    description:
      "Nunc euismod dapibus facilisis. Integer non sodales turpis.",
    image: decuresolutions_placeholder2,
  },
  {
    title: 'Feature C',
    description:
      "Nunc euismod dapibus facilisis. Integer non sodales turpis.",
    image: decuresolutions_placeholder4,
  },
  {
    title: 'Feature D',
    description:
      'Nunc euismod dapibus facilisis. Integer non sodales turpis',
    image: decuresolutions_placeholder3,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={background_feats}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Containercta className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Key features for your SaaS App
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Checkout the what you get in this mock fintech app 
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative px-4 py-1 lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                        'rounded-full' // Apply rounded corners to all tab titles
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-white'
                              : 'text-purple-300 hover:text-white lg:text-white',
                            'rounded-full' // Apply rounded corners to tab content
                          )}
                        >
                          <span className="absolute inset-0 rounded-full" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-full max-w-[67.8125rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0">
                      <Image
                        className="w-full h-auto object-cover"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Containercta>
    </section>
  )
}
