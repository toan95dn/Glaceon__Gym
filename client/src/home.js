import React, { Component } from 'react'
import './App.css'
import Preference from './preference'
import Profile from './profile'
export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSignUp: false,
            message: <br></br>,
            redirectSignUp: false,
            redirectSignIn: false,
        };

        this.createAccount = this.createAccount.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.verifyUCSDEmail = this.verifyUCSDEmail.bind(this);
        this.signIn = this.signIn.bind(this);
        
    }

    createAccount(){
        this.setState({isSignUp: true});
    }      
    signIn(){
        this.setState({isSignUp: false});
    }
    showErrorMessage(){
        if (!this.state.isSignUp){
            this.setState({message: "Email or Password may be Incorrect"});
        }
        else{
            this.setState({message: "Please enter a valid UCSD email"});
        } 

        setTimeout(() => {
            this.setState({message: <br></br>});
        }, 5000)
    }

    verifyUCSDEmail(event){
        const data = new FormData(event.target);
        let email = data.get('email');
        let isValid = false;
        for (let i = 0; i < email.length; i++){
            if (email[i] === '@' && i+9 === email.length && email.substring(i) === '@ucsd.edu') isValid = true;
        }
        if (!isValid) {
            //not valid, show error message and don't refresh
            if (this.state.isSignUp)
                this.setState({redirectSignUp : false});
            else 
                this.setState({redirectSignIn: false});
            this.showErrorMessage();
        }
        else {
            if (this.state.isSignUp)
                this.setState({redirectSignUp: true});
            else
                this.setState({redirectSignIn: true});
            event.target.reset();
        }
        event.preventDefault();
    }

    render() {
        const self = this;
        if (self.state.redirectSignIn){
            return <Preference/>
        }
        else if (self.state.redirectSignUp){
            return <Profile/>
        }
        else if (self.state.isSignUp){
            return (
            <div className="bg-gray-200">
                <div className="grid grid-cols-2 h-screen">
                    <img className="m-auto object-cover object-center max-h-full" src="images/App_Logo.png" alt="image of Gym++ logo" />
                    <div className="m-auto bg-gray-100 rounded-3xl h-5/6 w-5/6">
                        <div className="m-auto text-center w-5/6">
                            <h1 className="underline text-5xl uppercase mt-10 font-bold"  style={{color: '#182B49'}}>Gym++ Sign Up</h1>
                            <div className="mt-16 flex">
                                <span className="m-auto w-1/6 bg-black h-0.5"></span>
                                <span className="font-bold w-3/5 text-lg"> Must have a valid UCSD account</span>
                                <span className="m-auto w-1/6 bg-black h-0.5"></span>
                            </div>
                           <div>
                                <form className="flex flex-col mt-10" onSubmit={this.verifyUCSDEmail}>
                                    <div className="border-2 border-gray-300 shadow-md rounded-xl my-1">
                                        <input className="focus:outline-none w-full my-1 p-2 bg-gray-100" type="name" name="name" placeholder="Your name" required></input>
                                    </div>
                                    <div className="border-2 border-gray-300 shadow-md rounded-xl my-1">
                                        <input className="focus:outline-none w-full my-1 p-2 bg-gray-100" type="email" name="email" placeholder="Your UCSD email" required></input>
                                    </div>
                                    <div className="border-2 border-gray-300 shadow-md rounded-xl my-1">
                                        <input className="focus:outline-none my-1 p-2 w-full bg-gray-100" type="password" name="password" placeholder="Your password" required></input>
                                    </div>
                                    <button className="rounded-2xl mx-auto mt-4 p-3 w-1/3 text-gray-100 font-bold" type="submit" style={{backgroundColor:'#182B49'}}>Sign Up</button>
                                    <p className="mt-4 text-red-900">{this.state.message}</p>
                                </form>
                            </div>
                            <div className="mt-1 flex">
                                <span className="m-auto w-1/5 bg-black h-0.5"></span>
                                <span className="font-bold w-1/2 text-lg"> Have an account yet? </span>
                                <span className="m-auto w-1/5 bg-black h-0.5"></span>
                            </div>
                            <button className="rounded-2xl mx-auto mt-4 p-3 w-1/3 text-gray-100 font-bold"  style={{backgroundColor:'#182B49'}} type="submit" onClick={this.signIn}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>)
        }
        else 
        return (
            <div className="bg-gray-200">
                <div className="grid grid-cols-2 h-screen">
                    <img className="m-auto object-cover object-center max-h-full bg-home-background " src="images/App_Logo.png" alt="image of Gym++ logo" />
                    <div className="m-auto bg-gray-100 rounded-3xl h-5/6 w-5/6">
                        <div className="m-auto text-center w-5/6">
                            <h1 className="underline text-5xl uppercase mt-10 font-bold"  style={{color: '#182B49'}}>Gym++ Login</h1>
                            <div className="mt-16 flex">
                                <span className="m-auto w-1/6 bg-black h-0.5"></span>
                                <span className="font-bold w-3/5 text-lg"> Must have a valid UCSD account</span>
                                <span className="m-auto w-1/6 bg-black h-0.5"></span>
                            </div>
                           <div>
                                <form className="flex flex-col mt-10" onSubmit={this.verifyUCSDEmail}>
                                    <div className="border-2 border-gray-300 shadow-md rounded-xl my-1">
                                        <input className="focus:outline-none w-full my-2 p-3 bg-gray-100" type="email" name="email" placeholder="Your UCSD email" required></input>
                                    </div>
                                    <div className="border-2 border-gray-300 shadow-md rounded-xl my-1">
                                        <input className="focus:outline-none my-2 p-3 w-full bg-gray-100" type="password" name="password" placeholder="Your password" required></input>
                                    </div>
                                    <button className="rounded-2xl mx-auto mt-4 p-3 w-1/3 text-gray-100 font-bold" type="submit" style={{backgroundColor:'#182B49'}}>Sign In</button>
                                    <p className="mt-4 text-red-900">{this.state.message}</p>
                                </form>
                            </div>
                            <div className="mt-1 flex">
                                <span className="m-auto w-1/5 bg-black h-0.5"></span>
                                <span className="font-bold w-1/2 text-lg"> Don't have an account yet? </span>
                                <span className="m-auto w-1/5 bg-black h-0.5"></span>
                            </div>
                            <button className="rounded-2xl mx-auto mt-4 p-3 w-1/3 text-gray-100 font-bold"  style={{backgroundColor:'#182B49'}} type="submit" onClick={this.createAccount}>Create Account</button>
                            {/*
                            <div className="mt-10 border-2 border-gray-300 py-5 shadow-md rounded-xl relative">
                                <img className="absolute inline h-8 w-8 object-cover left-10" src="images/Google_Icon.png" alt="image of google icon"/>
                                <a className="text-lg" href="#">Login with Google</a>
                            </div>
 

                            <div className="mt-10 border-2 border-gray-300 py-5 shadow-md rounded-xl relative">
                                <img className="absolute inline h-8 w-8 object-cover left-10" src="images/Google_Icon.png" alt="image of google icon"/>
                                <a className="text-lg" href="#">Sign Up with Google</a>
                            </div>
                            

                            */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
