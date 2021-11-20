import React, { Component } from 'react'
import './App.css';
import {Menu, Transition} from '@headlessui/react'
import { Fragment} from 'react'
import Match from './match'

export default class preference extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            time: "DEFAULT",
            location: "DEFAULT",
            preference: "DEFAULT",
            intensity: "DEFAULT",
            message: "",
        };
        
        this.displayErrorMessage = this.displayErrorMessage.bind(this);
        this.checkRedirect = this.checkRedirect.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.updatePreference = this.updatePreference.bind(this);
        this.updateIntensity = this.updateIntensity.bind(this);
    }

    displayErrorMessage(){
        this.setState({message: "Please select an option for ALL the fields"});
        setTimeout(()=>{
            this.setState({message: ""});
            }, 5000);
    }

    checkRedirect(event){
        console.log(this.state.time + " " + this.state.location + " " + this.state.preference);
        if (this.state.time == "DEFAULT" || this.state.location == "DEFAULT" || this.state.preference == "DEFAULT" || this.state.intensity == "DEFAULT"){
            this.displayErrorMessage();
        }
        else {
            this.setState({redirect : true});
        }
        event.preventDefault();

    }

    updateTime(e){
        this.setState({time: e.target.value});
    } 
    updateLocation(e){
        this.setState({location: e.target.value});
    }
    updatePreference(e){
        this.setState({preference: e.target.value});
    }
    updateIntensity(e){
        this.setState({intensity: e.target.value});
    }
    
    render() {
        const self = this;
        if (self.state.redirect){
            return <Match />
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
                    <h1 className="underline text-blue-900 text-5xl uppercase pt-10 font-bold" style={{color: '#182B49'}}>Preferences</h1>
                    <form onSubmit={this.checkRedirect}>
                        <div className="mt-10 grid grid-cols-2">
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl">Workout Time</span>
                                <select onChange={this.updateTime} defaultValue={'DEFAULT'} required className="border-2 border-gray-300 my-5 mx-auto w-2/3 h-12 rounded-lg shadow-md" id="times" name="times">
                                    <option value="DEFAULT" disabled>Select your workout time</option>
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                    <option value="leap">LEAP DAY</option>
                                </select>
                                <span className="font-bold text-2xl">Location</span>
                                <select onChange={this.updateLocation} defaultValue={'DEFAULT'} required className="border-2 border-gray-300 my-5 mx-auto w-2/3 h-12 rounded-lg shadow-md" id="location" name="location">
                                    <option value="DEFAULT" disabled>Select your workout location</option>
                                    <option value="rimac">RIMAC</option>
                                    <option value="main">MAIN</option>
                                    <option value="aquatic">AQAUTIC</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl">Preferences</span>
                                <select onChange={this.updatePreference} defaultValue={'DEFAULT'} required className="border-2 border-gray-300  my-5 mx-auto w-2/3 h-12 rounded-lg shadow-md" id="preference" name="preference">
                                    <option value="DEFAULT" disabled>Select your workout preference</option>
                                    <option value="arms">LOWER BODY</option>
                                    <option value="legs">UPPER BODY</option>
                                    <option value="back">FULL BODY</option>
                                    <option value="full">CARDIO</option>
                                </select>
                                <span className="font-bold text-2xl">Intensity</span>
                                <select onChange={this.updateIntensity} defaultValue={'DEFAULT'} required className="border-2 border-gray-300  my-5 mx-auto w-2/3 h-12 rounded-lg shadow-md" id="preference" name="preference">
                                    <option value="DEFAULT" disabled>Select your intensity preference</option>
                                    <option value="low">LOW</option>
                                    <option value="medium">MEDIUM</option>
                                    <option value="high">HIGH</option>
                                </select>
                            </div>
                            
                        </div>
                        <p className="mt-5 text-red-900">{this.state.message}</p>
                        <button className="text-white font-bold absolute right-20 bottom-10  px-5 py-3 rounded-2xl" style={{backgroundColor: '#182B49'}}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
