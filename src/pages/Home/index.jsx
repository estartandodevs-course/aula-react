import React, { Component } from 'react';
import "./style.scss"
import Card from "../../components/Card";
import Loading from '../../components/Loading';


//Componente de classe
export default class Home extends Component {

    state = {
        users: [],
        loading: true,
        errorMessage: ""
    }

    componentDidMount() {

        fetch("https://reqres.in/api/users").then(res => res.json()).then(res => {
            this.setState({
                users: res.data,
                loading: false
            })
        }).catch(err => {
            this.setState(
                {
                    loading: false,
                    errorMessage: "Deu ruim!"
                }
            )
            console.log(err)
        })
    }
    render() {


        const { users, loading, errorMessage } = this.state;


        return (
            loading ? ( 
                <Loading/>
             ): (
                    <div>
                        <h1>{this.props.title}</h1>
                        <div className="home">
                            {users.map(user => {
                                return <Card
                                    key={user.id}
                                    first_name={user.first_name}
                                    avatar={user.avatar}
                                    last_name={user.last_name}
                                />
                            })}
                        </div>
                        { errorMessage && ( <p> ERROR -> {errorMessage} </p>)}
                    </div>

                )
        )

    }
}
