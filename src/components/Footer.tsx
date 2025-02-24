import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/shop" className="text-gray-600 hover:text-violet-700">
            Shop
          </Link>
          <Link href="/science" className="text-gray-600 hover:text-violet-700">
            Science & Research
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-violet-700">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-violet-700">
            Contact & FAQ
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Cellisit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 