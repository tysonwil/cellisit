import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-violet-100/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Cellisit
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pioneering the future of hair care with science and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-violet-700">Our Story</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Commitment to Innovation
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Cellisit was founded with a simple yet ambitious mission: to revolutionize hair care through scientific innovation. Our journey began when our team of researchers discovered the potential of plasma extraction technology for preserving the full potency of natural ingredients.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  After years of research and development, we perfected our proprietary Plasma PLM Extraction Method, which allows us to achieve an unprecedented concentration of active ingredients without using water or solvents.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Today, Cellisit 201 Anti-Hairloss Therapy Shampoo represents the culmination of our dedication to creating effective, science-backed solutions for hair loss and scalp health.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-96 rounded-lg overflow-hidden relative bg-violet-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-violet-700 font-semibold">Cellisit Research Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-violet-700">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Hair Care Through Science
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Cellisit, we believe that effective hair care solutions should be backed by rigorous science and innovation. Our mission is to develop products that not only address the symptoms of hair loss but target the root causes, using the most advanced extraction and formulation technologies available.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are committed to:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Scientific Excellence
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Continuously advancing our research and development to create the most effective hair care solutions possible.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352a5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352a5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                    </svg>
                  </div>
                  Quality & Safety
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Ensuring all our products meet the highest standards of quality and safety through rigorous testing and certification.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                  </div>
                  Customer Satisfaction
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Putting our customers first by creating products that deliver real results and exceed expectations.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Sustainable Innovation
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Developing extraction methods and formulations that are not only effective but also environmentally responsible.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-violet-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the Cellisit Revolution
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-violet-100">
              Experience the difference that science-backed hair care can make. Try Cellisit 201 today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/shop"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-violet-700 shadow-sm hover:bg-violet-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Shop Now
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.25" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 