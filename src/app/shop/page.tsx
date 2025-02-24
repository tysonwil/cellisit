import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';

export default function Shop() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Product image */}
          <div className="aspect-h-1 aspect-w-1 w-full">
            <div className="h-96 w-full rounded-lg overflow-hidden relative bg-violet-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-violet-700 font-semibold">Cellisit 201 Shampoo</p>
              </div>
            </div>
            
            {/* Additional product images */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative h-24 rounded-md overflow-hidden bg-violet-100 flex items-center justify-center">
                  <p className="text-violet-700 text-xs font-medium">Image {num}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cellisit 201 Anti-Hairloss Therapy Shampoo</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">$59.99</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">
                <p>
                  Experience the revolutionary Cellisit 201 Anti-Hairloss Therapy Shampoo, featuring our patented Plasma PLM Extraction Method. This advanced formula delivers a powerful 400,000 ppm concentration of active ingredients directly to your scalp, promoting hair growth and reducing hair loss.
                </p>
                <p>
                  FDA-registered and clinically tested, our waterless extraction process preserves the full potency of natural ingredients, making it safe for even the most sensitive scalps.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className="h-5 w-5 flex-shrink-0 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  5.0 (42 reviews)
                </p>
              </div>
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <AddToCartButton />
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">Additional details</h2>

              <div className="divide-y divide-gray-200 border-t">
                <div className="py-6">
                  <h3 className="text-sm font-medium text-gray-900">Key Ingredients</h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">Caffeine (stimulates hair follicles)</p>
                    <p className="text-sm text-gray-600">Herbal extracts (nourishes scalp)</p>
                    <p className="text-sm text-gray-600">Biotin (strengthens hair)</p>
                    <p className="text-sm text-gray-600">Saw Palmetto (reduces DHT)</p>
                  </div>
                </div>
                <div className="py-6">
                  <h3 className="text-sm font-medium text-gray-900">How to Use</h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">1. Apply to wet hair</p>
                    <p className="text-sm text-gray-600">2. Massage into scalp for 2-3 minutes</p>
                    <p className="text-sm text-gray-600">3. Leave on for 5 minutes</p>
                    <p className="text-sm text-gray-600">4. Rinse thoroughly</p>
                    <p className="text-sm text-gray-600">5. Use 2-3 times per week for best results</p>
                  </div>
                </div>
                <div className="py-6">
                  <h3 className="text-sm font-medium text-gray-900">Shipping & Returns</h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">Free shipping on orders over $75</p>
                    <p className="text-sm text-gray-600">30-day satisfaction guarantee</p>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="reviews-heading" className="mt-12">
              <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">Customer Reviews</h2>

              <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
                <div className="pt-10">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <svg
                          key={rating}
                          className="h-5 w-5 flex-shrink-0 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">John D.</p>
                  </div>
                  <div className="mt-4 space-y-6 text-base italic text-gray-600">
                    <p>
                      "I've tried many hair loss products over the years, but Cellisit 201 is the first one that actually delivered results. After just 2 months, I'm seeing new growth and my hair feels thicker."
                    </p>
                  </div>
                </div>

                <div className="pt-10">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <svg
                          key={rating}
                          className="h-5 w-5 flex-shrink-0 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Sarah M.</p>
                  </div>
                  <div className="mt-4 space-y-6 text-base italic text-gray-600">
                    <p>
                      "I have a very sensitive scalp and most shampoos cause irritation. Cellisit 201 is gentle yet effective. My scalp feels healthier and I'm noticing less hair in the drain."
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 