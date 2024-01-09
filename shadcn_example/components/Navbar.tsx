import React, { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const initialNavigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Report Builder', href: '/reportBuilder', current: false },
  { name: 'SQL Editor', href: '/sqlEditor', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [navigation, setNavigation] = useState(initialNavigation);
  const [activeItem, setActiveItem] = useState('Dashboard');

  useEffect(() => {
    const updatedNavigation = navigation.map(item => {
      return { ...item, current: item.name === activeItem };
    });
    setNavigation(updatedNavigation);
  }, [activeItem]);

  const handleNavItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href="/">
                        <h2 className="text-white text-xl">
                          🚛 Fleetcard
                        </h2>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavItemClick(item.name)}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
