import React, { Component } from 'react'
import './App.css';
import {Menu, Transition} from '@headlessui/react'
import { Fragment} from 'react'

export default class match extends Component {
    render() {
        return (
            <div className="h-screen bg-gray-200">
                <nav className="h-20 bg-gray-100 relative">
                    <img className="absolute top-3 left-3 h-60 w-60 object-cover" src="images/App_Logo.png" alt="image of Gym++ logo"/>
                    <Menu>
                            <div>
                            <Menu.Button>
                                <img className="cursor-pointer absolute top-5 right-5 h-10 w-10 object-cover" src="images/Profile_Icon.png" alt="image of profile icon"/>
                            </Menu.Button>
                            </div>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-5 w-48 mt-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a href="/profile"
                                        className={`${
                                        active ? 'bg-violet-500 bg-blue-50' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Profile
                                    </a>
                                    )}
                                </Menu.Item>
                                </div>
                                <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a href="/preference"
                                        className={`${
                                        active ? 'bg-violet-500 bg-blue-50' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Preferences
                                    </a>
                                    )}
                                </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a href="/match"
                                        className={`${
                                        active ? 'bg-violet-500 bg-blue-50' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Matches
                                    </a>
                                    )}
                                </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a href="#"
                                        className={`${
                                        active ? 'bg-violet-500 bg-blue-50' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Friends
                                    </a>
                                    )}
                                </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a href="/"
                                        className={`${
                                        active ? 'bg-violet-500 bg-blue-50' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        Logout
                                    </a>
                                    )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                            </Transition>
                        </Menu>
                </nav>
                <div className="mt-20 bg-gray-100 h-2/3 w-4/6 mx-auto rounded-3xl text-center">
                    <h1 className="underline text-5xl uppercase pt-10 font-bold" style={{color: '#182B49'}}>Matching</h1>
                    <img className="mt-10 mx-auto" src="images/choose.jpg"/>
                </div>
            </div>
        )
    }
}
