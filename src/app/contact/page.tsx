import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-violet-100/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact & FAQ
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions? We're here to help. Find answers to common questions or reach out to our team.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-violet-700">Get in Touch</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We'd Love to Hear from You
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you have questions about our products, need assistance with an order, or want to learn more about our technology, our team is ready to help.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <EnvelopeIcon className="absolute left-1 top-1 h-5 w-5 text-violet-700" aria-hidden="true" />
                      Email
                    </dt>
                    <dd className="inline ml-1">
                      <a href="mailto:info@cellisit.com" className="text-violet-700 hover:text-violet-600">
                        info@cellisit.com
                      </a>
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <PhoneIcon className="absolute left-1 top-1 h-5 w-5 text-violet-700" aria-hidden="true" />
                      Phone
                    </dt>
                    <dd className="inline ml-1">
                      <a href="tel:+1-800-CELLISIT" className="text-violet-700 hover:text-violet-600">
                        +1-800-CELLISIT
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-violet-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-violet-700">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our products, technology, and ordering process.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="space-y-8">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  How does Cellisit 201 differ from other anti-hairloss shampoos?
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Cellisit 201 uses our patented Plasma PLM Extraction Method, which achieves a 400,000 ppm concentration of active ingredients without water or solvents. This results in significantly higher potency and effectiveness compared to traditional products, which typically use water-based extraction methods that dilute the active compounds.
                </dd>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  How soon can I expect to see results?
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  While individual results may vary, many users report noticing improvements in scalp health within the first 2-4 weeks of regular use. More significant results in terms of reduced hair loss and new growth typically become apparent after 2-3 months of consistent use.
                </dd>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  Is Cellisit 201 suitable for sensitive scalps?
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Yes, our formula is designed to be gentle on the scalp while delivering powerful results. The waterless extraction method preserves the natural properties of the ingredients without harsh chemicals or irritants. However, as with any hair care product, we recommend performing a patch test if you have particularly sensitive skin.
                </dd>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  What is your shipping policy?
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  We offer free standard shipping on all orders over $75. Standard shipping typically takes 3-5 business days within the continental United States. Expedited shipping options are available at checkout for an additional fee.
                </dd>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  What is your return policy?
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return the unused portion for a full refund within 30 days of purchase. Please contact our customer service team to initiate the return process.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 