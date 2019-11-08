import React, { Component } from 'react';
import "./style.scss"
import Card from "../../components/Card";
import Loading from '../../components/Loading';
import Modal from '../../components/Modal/index'


//Componente de classe
export default class Home extends Component {

    state = {
        users: [],
        loading: true,
        errorMessage: "",
        user:"",
        modalWin: false
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


    getDetail = (id) => {
        fetch(`https://reqres.in/api/users/${id}`).then(res => res.json()).then(res => {
          console.log(res.data)          
            this.setState({
              modalWin: true,
              user: res.data
            });
        })
    }

    render() {
        const { users, loading, errorMessage, modalWin, user} = this.state;

        return (
            loading ? ( 
                <Loading/>
            ): (
                <div>
                    {/* <h1>{this.props.title}</h1> */}
                    <div className="home">
                        {users.map(user => {
                            return <Card
                                key={user.id}
                                first_name={user.first_name}
                                avatar={user.avatar}
                                action={ () => this.getDetail(user.id) }
                                buttonValue = {'Ver mais'}
                            />
                        })}
                    </div>
                    { errorMessage && ( <p> ERROR -> {errorMessage} </p>)}
                    { this.state.modalWin && <Modal buttonValue={'Close'} user = {user} action ={()=>{this.setState({modalWin: !modalWin})}} />}
                </div>
                
            )
        )

    }
}
