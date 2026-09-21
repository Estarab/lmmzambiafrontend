import { useState } from 'react';
import classNames from 'classnames';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <nav className="bg-blue-700 shadow-md">
        {/* container */}
        <div className="container flex flex-wrap px-4 py-2 mx-auto lg:space-x-4">
          {/* brand */}
          <a href="#" className="inline-flex p-2 text-xl font-bold tracking-wider text-white uppercase">
            Frontendfunn
          </a>
          {/* toggler btn */}
          <button
            className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* menu */}
          <div className={classNames("w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0", {
            'flex': navbarOpen,
            'hidden': !navbarOpen,
          })}>
            <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
              <li>
                <a href="#" className="flex px-4 py-2 font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">
                  Projects
                </a>
              </li>
              {/* dropdown */}
              <li className="relative">
                <button
                  className="flex w-full px-4 py-2 font-medium text-white rounded-md outline-none focus:outline-none hover:bg-blue-800"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Dropdown
                </button>
                {/* dropdown menu */}
                <div
                  className={classNames("right-0 p-2 mt-1 bg-white rounded-md shadow lg:absolute", {
                    'flex flex-col': dropdownOpen,
                    'hidden': !dropdownOpen,
                  })}
                  onClick={() => setDropdownOpen(false)}
                >
                  <ul className="space-y-2 lg:w-48">
                    <li>
                      <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                        Categories
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                        Inventories
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                        Brands
                      </a>
                    </li>
                  </ul>
                </div>
                {/* dropdown menu */}
              </li>
              {/* dropdown */}
              <li>
                <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">
                  Invoices
                </a>
              </li>
            </ul>
          </div>
          {/* menu */}
        </div>
        {/* container */}
      </nav>

      <div className="container mx-auto">
        <div className="my-5 text-xl font-bold">Code</div>
        <div className="w-full p-5 overflow-auto bg-white rounded-md">
          <div className="w-full overflow-auto bg-black">
            <pre>
              <code className="bg-transparent rounded-md select-all html">
                &lt;nav class=&quot;bg-blue-700 shadow-md&quot;&gt;
                  &lt;!-- container --&gt;
                  &lt;div class=&quot;container flex flex-wrap px-4 py-2 mx-auto lg:space-x-4&quot;&gt;
                    &lt;!-- brand --&gt;
                    &lt;a href=&quot;#&quot; class=&quot;inline-flex p-2 text-xl font-bold tracking-wider text-white uppercase&quot;&gt;Frontendfunn&lt;/a&gt;
                    &lt;!-- brand --&gt;
                    &lt;!-- toggler btn --&gt;
                    &lt;button class=&quot;inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none&quot; onClick=&quot;navbarOpen = !navbarOpen&quot;&gt;
                      &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-6 h-6&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M4 6h16M4 12h16M4 18h16&quot; /&gt;
                      &lt;/svg&gt;
                    &lt;/button&gt;
                    &lt;!-- menu --&gt;
                    &lt;div class=&quot;w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0&quot; className=&quot;{'hidden':!navbarOpen,'flex':navbarOpen}&quot;&gt;
                      &lt;ul class=&quot;flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2&quot;&gt;
                        &lt;li&gt;
                          &lt;a href=&quot;#&quot; class=&quot;flex px-4 py-2 font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800&quot;&gt;Dashboard&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                          &lt;a href=&quot;#&quot; class=&quot;flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800&quot;&gt;Projects&lt;/a&gt;
                        &lt;/li&gt;
                        &lt;!-- dropdown --&gt;
                        &lt;li class=&quot;relative&quot;&gt;
                          &lt;button href=&quot;#&quot; class=&quot;flex w-full px-4 py-2 font-medium text-white rounded-md outline-none focus:outline-none hover:bg-blue-800&quot; onClick=&quot;dropdownOpen = !dropdownOpen&quot;&gt;
                            Dropdown
                          &lt;/button&gt;
                          &lt;!-- dropdown menu --&gt;
                          &lt;div class=&quot;right-0 p-2 mt-1 bg-white rounded-md shadow lg:absolute&quot; className=&quot;{'hidden':!dropdownOpen,'flex flex-col':dropdownOpen}&quot;&gt;
                            &lt;ul class=&quot;space-y-2 lg:w-48&quot;&gt;
                              &lt;li&gt;
                                &lt;a href=&quot;#&quot; class=&quot;flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black&quot;&gt;Categories&lt;/a&gt;
                              </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
