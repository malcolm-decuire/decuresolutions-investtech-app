//20240720 
import Link from 'next/link'
import { Buttoncta } from '@/components/Buttoncta'
import { SlimLayout } from '@/components/SlimLayout'
import { Logo } from '@/components/Logo'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/about" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Example error page. 
      </p>
      <p className="mt-3 text-sm text-gray-700">
        Contact us via the calendly link below
      </p>
      <Buttoncta href="https://calendly.com/malcolm-decuire" className="mt-10">
        Calendly
      </Buttoncta>
    </SlimLayout>
  )
}