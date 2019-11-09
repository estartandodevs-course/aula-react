import React, {Component} from 'react'
import './style.scss'
import Card from "../../components/Card";

export default class Modal extends Component{ 
    render(){
        const {user, action, buttonValue} = this.props

        return (
           <div>
                <div className='modalContainer'>
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

                <div className="bgModal"></div>
           </div>
        )  
    }  
}
