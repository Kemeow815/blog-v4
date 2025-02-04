import React from 'react'
import Link from './Link'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'

const SiteFooter = () => {
  return (
    <footer className="px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className=" hover:text-primary-600 dark:hover:text-primary-400">
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link href="/tags" className=" hover:text-primary-600 dark:hover:text-primary-400">
                  Tags
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Free Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/pdf-to-markdown"
                  className=" hover:text-primary-600 dark:hover:text-primary-400"
                >
                  PDF to Markdown
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className=" hover:text-primary-600 dark:hover:text-primary-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>

            <div className="mb-3 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
              <SocialIcon kind="x" href={siteMetadata.x} size={6} />
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="rounded-r-lg bg-primary-500 px-4 py-2 text-white transition-colors hover:bg-primary-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2">
              <div>{`© ${new Date().getFullYear()}`}</div>
              <Link href="/" className=" hover:text-primary-600 dark:hover:text-primary-400">
                {siteMetadata.title}.
              </Link>
              <div>All rights reserved.</div>
            </div>
            <div className="mt-4 flex space-x-6 md:mt-0">
              {/* <Link href="/" className="text-sm hover:underline">
                Terms
              </Link> */}
              <Link
                className=" hover:text-primary-600 dark:hover:text-primary-400"
                href="/privacy/"
              >
                Privacy
              </Link>
              {/* <Link href="/" className="text-sm hover:underline">
                Cookies
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
