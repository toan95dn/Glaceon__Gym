import React, { Component } from 'react'
import './App.css'
import {Menu, Transition} from '@headlessui/react'
import { Fragment} from 'react'
import Preference from './preference'

export default class profile extends Component {
    constructor(props){
            super(props);
            this.state = {
                redirect: false,
                year: "DEFAULT",
                gender: "DEFAULT",
                message: "",
            };
            
            this.displayErrorMessage = this.displayErrorMessage.bind(this);
            this.checkRedirect = this.checkRedirect.bind(this);
            this.updateYear = this.updateYear.bind(this);
            this.updateGender = this.updateGender.bind(this)
        }

        displayErrorMessage(){
            this.setState({message: "Please fill out every field for your profile"});
            setTimeout(()=>{
                this.setState({message: ""});
                }, 5000);
        }

        checkRedirect(event){
            if (this.state.year == "DEFAULT" || this.state.gender == "DEFAULT"){
                this.displayErrorMessage();
            }
            else {
                console.log("hi");
                this.setState({redirect : true});
            }
            event.preventDefault();

        }

        updateYear(e){
            this.setState({year: e.target.value});
        }
        updateGender(e){
            this.setState({gender: e.target.value});
        }
    
    render() {
        const self = this;
        if (self.state.redirect){
            console.log("hi");
            return <Preference/>
        }
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
                <div className="mt-20 bg-gray-100 h-2/3 w-4/6 mx-auto rounded-3xl text-center relative">
                    <h1 className="underline text-5xl uppercase pt-10 font-bold" style={{color: '#182B49'}}>Profile</h1>
                    <form onSubmit={this.checkRedirect}>
                        <div className="w-5/6 mx-auto">
                            <div className="mt-10 flex flex-col">
                                <span className="font-bold text-2xl">Personal Info</span>
                                <input required className="border-2 border-gray-300 h-11 rounded-lg my-2 mx-auto w-full pl-5 shadow-md" type="text" placeholder="Basic Description/Bio"/>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="flex flex-col mr-5">
                                    <span className="font-bold text-2xl">Academic Year</span>
                                    <select onChange={this.updateYear} defaultValue={'DEFAULT'} required className="border-2 border-gray-300  my-5 mx-auto w-full h-12 rounded-lg shadow-md" id="preference" name="preference">
                                        <option value="DEFAULT" disabled selected>Select your academic year</option>
                                        <option value="arms">2021</option>
                                        <option value="legs">2022</option>
                                        <option value="back">2023</option>
                                        <option value="full">2024</option>
                                    </select>
                                </div>
                                <div className="flex flex-col ml-5">
                                    <span className="font-bold text-2xl">Gender</span>
                                    <select onChange={this.updateGender} defaultValue={'DEFAULT'} required className="border-2 border-gray-300  my-5 mx-auto w-full h-12 rounded-lg shadow-md" id="preference" name="preference">
                                        <option value="DEFAULT" disabled selected>Select your gender</option>
                                        <option value="arms">MALE</option>
                                        <option value="legs">FEMALE</option>
                                        <option value="full">OTHER</option>
                                    </select>
                                </div>
                            </div>

                            <p className="mt-5 text-red-900">{this.state.message}</p>
                            <button className="absolute font-bold text-white right-20 bottom-10 px-5 py-3 rounded-2xl"  style={{backgroundColor: '#182B49'}}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
