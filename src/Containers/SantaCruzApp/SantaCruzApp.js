import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";
import Shipping from "../Shipping/Shipping";
import Login from "../../Components/Login/Login";
import PasswordReset from "../../Components/Login/PasswordReset/PasswordReset";
import Signup from "../../Components/Signup/Signup";
import NavBar from "../../Components/NavBar/NavBar";
import Payment from "../../Components/Payment/Payment";
import OrderConfirmation from '../../Components/OrderConfirmation/OrderConfirmation';
import AccountPage from "../../Components/AccountPage/AccountPage";
import PageNotFound from "../../Components/PageNotFound/PageNotFound";
import AuthContext from "../../store/auth-context";



class SantaCruzApp extends Component{

    state = {
        isAuth: false,
        token: null,
        userId: null,
        email: null,
        shippingInfo: null,
        orderNumber: null,
        error: false,
        errorMessage: null
    }

    static contextType = AuthContext;

    authenticationHandler = (userId) => {
        this.setState({
            isAuth: true,
            userId: userId
        }, localStorage.setItem('userId', userId))

    }

    getShippingInfo = (shippingInfo) => {
        this.setState({
            shippingInfo: shippingInfo,
        }, console.log('orderNumber: ' + this.state.orderNumber))
    }

    getOrderSuccess = (orderNumber) => {
        this.setState({
            orderNumber: orderNumber
        })
    }

    errorHandler = (error) => {

    this.setState({
                error: error,
                errorMessage: 'Either Wrong Email or Wrong Password'
            })
        

    }

    componentDidMount(){

        const loggedInUser = localStorage.getItem('user');
        const loggedInEmail = localStorage.getItem('userEmail');
        const loggedInToken = localStorage.getItem('userToken');

        
            if(loggedInUser){
              this.context.login(loggedInToken, loggedInUser, loggedInEmail)
              this.setState({
                  userId: loggedInUser,
                  token: loggedInToken,
                  email: loggedInEmail,
                  error: false,
                  errorMessage: null
              })

        
          }
        
        
    }

    componentDidUpdate(){
        const loggedInUser = localStorage.getItem('user');
        console.log(loggedInUser)
    }


    render(){
        let accountPath = '/id=' + this.state.userId + '/my-account';
        let successPath = '/order/' + this.state.orderNumber + '/confirmation';
        

        return(
            <div>
                <Router>
                <NavBar isAuth={this.state.isAuth} token={this.state.token} userId={this.state.userId} email={this.state.email} />
                    
                <Switch>
                
                <Route path="/" exact component={Home} />
                <Route path="/shipping" exact 
                    render={(props) => <Shipping {...props} getShippingInfo={this.getShippingInfo} />} />
                <Route path="/shipping/payment" exact 
                    render={(props) => <Payment {...props} userId={this.state.userId} shippingInfo={this.state.shippingInfo} getOrderSuccess={this.getOrderSuccess} orderNumber={this.state.orderNumber}/>}/>
                <Route path="/login" 
                    render={(props) =>  <Login {...props} errorCallback= {this.errorHandler} errorMessage={this.state.errorMessage} parentCallback={this.authenticationHandler}/> }/>
                <Route path="/reset-password" component={PasswordReset} />
                <Route path="/signup" component={Signup}/>
                <Route path={successPath} exact component={OrderConfirmation} />
                <Route path={accountPath} exact
                    render={(props) => <AccountPage {...props} userId={this.state.userId} /> } />

                <Route component={PageNotFound} />
                
                </Switch>
                </Router>
                
            </div>
        )
    }
}

export default SantaCruzApp; 