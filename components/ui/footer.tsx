import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
 

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.116 6.01v3.919l1.88 1.963V6.009h-1.88zM6.01 7.992l7.638 7.723c-.121.129-.245.256-.37.381l-7.268 7.35h3.67c.155-.003.312.01.467-.01.272-.003.543.005.814-.003.314-.32.622-.646.934-.97l2.677-2.795c.473-.5.955-.993 1.425-1.493.22.218.432.448.648.672.973 1.014 1.942 2.032 2.915 3.044.495.513.984 1.03 1.48 1.542.272.01.546-.002.82.006.096.013.195.007.294.007h3.83l-.69-.696-6.772-6.846c-.052-.066-.114-.127-.172-.189.237-.246.48-.491.723-.734 2.304-2.328 4.605-4.66 6.91-6.99h-4.938c-.713.744-1.425 1.489-2.14 2.23-.967 1.012-1.935 2.028-2.906 3.037-1.677-1.76-3.361-3.511-5.038-5.266H6.01zM16 19.53h.002c-.004 1.967-.004 3.933-.004 5.9h1.89c0-1.308.004-2.613 0-3.92-.627-.661-1.262-1.317-1.888-1.98z" fill="#c02aea"/></svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://t.me/+Ljmqr7JmNAllNjE1" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z" fill="#c02aea"/>
</svg>
                </Link>
              </li> 
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
