export default function Footer() {
  return (
    <footer className="pb-4 mt-20">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {/* <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Company
            </h2>
            <ul className="space-y-4 text-md">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Merch
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Brand
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Meetups
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Newsroom
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Products
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Hosting
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Domains
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  SSL
                </a>
              </li>
            </ul>
          </li> */}
          <li className="space-y-5">
            <h2 className="text-sm tracking-wide text-black
             uppercase font-bold">
              Lidhu me ne
            </h2>
            <ul className="space-y-4">
              {/* <li>
                <a
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Twitter
                </a>
              </li> */}
              <li>
                <a
                  className="text-black transition-colors duration-200 text-2xl"
                  href="https://www.facebook.com/profile.php?id=61570395778723"
                  target="_blank"

                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-black transition-colors duration-200 font-semibold text-2xl"
                  href="https://www.instagram.com/alberatung/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {/* <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li> */}
            {/* <ul class="flex justify-center mt-5 space-x-5"> */}
            <li>
              <a href="https://www.facebook.com/profile.php?id=61570395778723"
                target="_blank"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alberatung/"
                target="_blank"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </li>

            {/* </ul> */}
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row mt-2">
            <a
              href="/"
              className="text-md text-gray-500 transition-colors duration-300 font-semibold tracking-tight"
            >
              © ALBERATUNG, 2024
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
