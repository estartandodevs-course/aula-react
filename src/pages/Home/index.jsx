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
        user:{},
        modalWin: false,
        page: Number ,
        totalPages: Number
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users").then(res => res.json()).then(res => {

            console.log(res)
            console.log(res.total_pages)

            this.setState({
                users: res.data,
                loading: false,
                page: res.page,
                totalPages: res.total_pages
            })

            this.licreate(this.state.totalPages)           

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

    licreate(tp){
        let ul = document.createElement('ul')
        console.log(tp)
        for(let i= 1; i<=tp ; i++){
            let li = document.createElement('li')
            let text = document.createTextNode(i)
            li.appendChild(text)
            ul.appendChild(li)
        }
        document.querySelector('#pag').appendChild(ul)

        let tli = document.querySelectorAll('li')

        tli.forEach(li=>{
            li.addEventListener('click', ()=> this.nexPage(parseInt(li.textContent)))
        })
    }

    nexPage(next){
        this.setState({loading: true})
        setTimeout(()=>{
            fetch(`https://reqres.in/api/users?page=${next}`)
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                this.setState({
                    users: data.data,
                    loading: false,
                    totalPages: data.total_pages
                })
                this.licreate(data.total_pages)
            })
        },1000)
    }

    toggleModal = () => {
        this.setState({modalWin: !this.state.modalWin})
    }

    render() {
        const { users, loading, errorMessage, modalWin, user} = this.state;

        return (
            loading ? ( 
                <div className="loading">
                    <Loading/>
                </div>
            ): (
                <div className="container">
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

                    <Modal 
                                    show={modalWin}
                                    buttonValue={'Close'} 
                                    user = {user} 
                                    action ={this.toggleModal}
                                />

                    <div id="pag"></div>
                </div>                
            )
        )
    }
}
