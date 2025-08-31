import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-2">
        <div>
          <p className="font-semibold text-lg">BAGS.co</p>
          <p className="mt-3 text-sm text-gray-600">
            Premium black & white aesthetic, gold-accent details, built to last.
          </p>
        </div>
        <div>
          <p className="font-medium text-base">Explore</p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/catalogue" className="hover:text-black transition-colors">
                Catalogue
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-base">Support</p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/shipping-returns" className="hover:text-black transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/care-guide" className="hover:text-black transition-colors">
                Care Guide
              </Link>
            </li>
            <li>
              <Link href="/warranty" className="hover:text-black transition-colors">
                Warranty
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-base">Contact</p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>
              <a href="tel:+919745561967" className="hover:text-black transition-colors">
                +91 9846127455
              </a>
            </li>
            <li>
              <a href="mailto:hello@bags.co" className="hover:text-black transition-colors">
                boscobaags@gmail.com
              </a>
            </li>
            <li>Mon–Fri, 9am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} BAGS.co — All rights reserved.
      </div>
    </footer>
  )
}