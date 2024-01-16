import React, { useContext, useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { StyleContext } from '@/context/StyleContext'
import { Toggle } from './ui/toggle';
import { LibraryNameContext } from '@/app/layout';

const initialNavigation = [
  { name: 'Dashboard', current: true, href:'/' },
  { name: 'Report Builder', current: false, href:'/reportBuilder' },
  { name: 'SQL Editor', current: false, href:'/sqlEditor' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  // const { style, setStyle, showCode, setShowCode } = useContext(StyleContext);
  const [ style, setStyle, showCode, setShowCode ] = useContext(LibraryNameContext);

  const [navigation, setNavigation] = useState(initialNavigation);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [selectedOption, setSelectedOption] = useState(style || "default");

  useEffect(() => {
    // Updating global style in StyleContext
    setStyle(selectedOption)

    const updatedNavigation = navigation.map((item) => ({
      ...item,
      href: `${item.href}`,
      current: item.name === activeItem,
    }));

    // console.log(updatedNavigation);
    setNavigation(updatedNavigation);

  }, [activeItem, selectedOption]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
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

              {/* Option: Mantine */}
              <a
                key="mantine"
                onClick={() => setSelectedOption('mantine')}
                className={classNames(
                  selectedOption === 'mantine'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Mantine
              </a>
              <a
                key="antd"
                onClick={() => setSelectedOption('antd')}
                className={classNames(
                  selectedOption === 'antd'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Antd
              </a>
              <a
                key="chakra"
                onClick={() => setSelectedOption('chakra')}
                className={classNames(
                  selectedOption === 'chakra'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Chakra
              </a>
              <a
                key="tailwind"
                onClick={() => setSelectedOption('tailwind')}
                className={classNames(
                  selectedOption === 'tailwind'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}
              >
                Tailwind
              </a>

              <Toggle aria-label="Toggle italic" onClick={() => setShowCode(!showCode)} className={classNames(
                  selectedOption === 'material-ui'
                    ?  'text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                )}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
                </svg>
              </Toggle>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;

