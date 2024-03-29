import React, {Component} from 'react'
import './style.scss'
import Card from "../../components/Card";

export default class Modal extends Component{ 
    render(){
        const {user, action, buttonValue, show} = this.props

        return (
           <div>
                <div className='modalContainer' style={{left: show ? 0 : "100vw"}}>
                <Card 
                    key={user.id}
                    first_name={user.first_name} 
                    avatar={user.avatar} 
                    last_name={user.last_name} 
                    email= {user.email}
                    className={'lightCard'}
                    action={action}
                    buttonValue = {buttonValue}
                />
                </div>
           </div>
        )  
    }  
}
