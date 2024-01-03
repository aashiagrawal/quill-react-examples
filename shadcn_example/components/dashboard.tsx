import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Dashboard } from '@quillsql/react'

const user = {
  name: 'John Doe',
  email: 'johndoe@quill.co',
  imageUrl:
    "",
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function DashExample() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-slate-100">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://quill.co/_next/static/media/quillwhite.2b934b4d.svg"
                        alt="Quill"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://quill.co/_next/static/media/quill.c09d417a.svg"
                        alt="Your Company"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Dashboard
          name="transactions"
          containerStyle={{
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 30,
            width: "100%",
          }}/>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
