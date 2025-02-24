import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-violet-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  The Future of Hair Care Is Here
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Cellisit 201 Anti-Hairloss Therapy Shampoo uses revolutionary Plasma PLM Extraction Method to deliver powerful natural ingredients directly to your scalp.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/shop"
                    className="rounded-md bg-violet-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                  >
                    Buy Now
                  </Link>
                  <Link href="/science" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-[3/2] w-full rounded-lg overflow-hidden relative bg-violet-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-violet-700 font-semibold">Cellisit 201 Shampoo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-violet-700">Advanced Hair Care</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Backed by Science, Loved by Customers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our revolutionary formula combines cutting-edge extraction technology with powerful natural ingredients.
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
                  FDA-Registered
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our formula meets the highest safety and quality standards, registered with the FDA and KFDA.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  400,000 ppm Concentration
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our unique extraction method delivers an unprecedented concentration of active ingredients.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 01-.659 1.591L9.5 14.5M9.75 3.104V1.5m0 0h4.5m-4.5 0v1.604m4.5-1.604v1.604" />
                    </svg>
                  </div>
                  Waterless Extraction
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our Plasma PLM Extraction Method uses no water or solvents, preserving the full potency of ingredients.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  Patented Technology
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our innovative extraction process is protected by multiple patents and backed by scientific research.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-violet-700">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your hair care routine?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience the power of Cellisit 201 Anti-Hairloss Therapy Shampoo and see the difference for yourself.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/shop"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-violet-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Shop Now
                </Link>
                <Link href="/science" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <div className="absolute left-0 top-0 w-full h-full rounded-lg overflow-hidden bg-violet-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold">Before and After Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
