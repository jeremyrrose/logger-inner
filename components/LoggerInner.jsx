import React from 'react'

import {login, getMessages} from '../services'

class LoggerInner extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            results: null
        }
    }

    // this could just be called "login"... 
    // it would then be `this.login` while the imported function would just be `login`
    // distinct names were used for clarity
    loginMethod = async () => {
        const user = {
            username: "jeremy",
            password: '1234'
        } // user would instead be set based on form data held in state via controlled components
        const resp = await login(user)
        console.log(resp)
        if (resp.token) { // checks for successful response in correct format
            this.setState({
                token: resp.token
            })
            // include the line below to automatically GET after 
            // this.getMessagesMethod()
        } else {
            console.log(resp.non_field_errors)
            // you might have other user feedback logic in here
        }
    }

    // could be "getMessages"
    getMessagesMethod = async () => {
        const resp = await getMessages(this.state.token)
        console.log(resp)
        this.setState({
            results: resp.results
        })
    }

    render () {
        return(
            <>
            <button onClick={this.loginMethod}>Log In</button>
            <button onClick={this.getMessagesMethod}>Get Them!</button>
            </>
        )
    }
}

export default LoggerInner