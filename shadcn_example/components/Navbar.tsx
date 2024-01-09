import React, { useContext, useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { StyleContext } from '@/context/StyleContext'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const initialNavigation = [
  { name: 'Dashboard', baseHref: '', current: true, href:'/' },
  { name: 'Report Builder', baseHref: '/reportBuilder', current: false, href:'/reportBuilder' },
  { name: 'SQL Editor', baseHref: '/sqlEditor', current: false, href:'/sqlEditor' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { style, setStyle } = useContext(StyleContext);

  const [navigation, setNavigation] = useState(initialNavigation);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [selectedOption, setSelectedOption] = useState('default');

  useEffect(() => {
    console.log(selectedOption);
    console.log("currStyle is: ", style)

    // Updating global style in StyleContext
    setStyle(selectedOption)

    const updatedNavigation = navigation.map((item) => ({
      ...item,
      href: `${item.baseHref}/${selectedOption}`,
      current: item.name === activeItem,
    }));

    console.log(updatedNavigation);
    setNavigation(updatedNavigation);

  }, [activeItem, selectedOption]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/default">
                  <h2 className="text-white text-xl">🚛 Fleetcard</h2>
                </Link>
              </div>
              <div className="hidden md:flex space-x-4 ml-10">

{navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <h3
                      className={classNames(
                        item.current
                          ? 'hover:bg-gray-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex space-x-4">
              {/* Option: Default */}
              <a
                key="default"
                onClick={() => setSelectedOption('default')}
                className={classNames(
                  selectedOption === 'default'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Default
              </a>

              {/* Option: Shadcn */}
              <a
                key="shadcn"
                onClick={() => setSelectedOption('shadcn')}
                className={classNames(
                  selectedOption === 'shadcn'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Shadcn
              </a>

              {/* Option: Material UI */}
              <a
                key="material-ui"
                onClick={() => setSelectedOption('material-ui')}
                className={classNames(
                  selectedOption === 'material-ui'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Material UI
              </a>
            </div>

          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;

