import React from 'react'
import styled from "styled-components"
import './signin.css'
import { Link } from 'react-router-dom'


const Signin = () => {
    return (
        <div>
            
        <Container>

            <Nav>
                <a href="">
                    <img src="images/login-logo.svg" alt="" />

                </a>
                <Form>

                <h1 className='Signinpage'>Signin?</h1>
                <p className='paragraph'>Stay updated on your professional world</p>
                    <form action="">
        
                        <input type="text" placeholder="Enter Email / Number"/><br />
                        <input type="text" placeholder="Enter your password"/>
                    </form>
                    <button className='siginbutton'>Submit</button>

                    <strong>Forgot password ?</strong>
                    <button className='loginwith'>Login with the Apple</button>

                </Form>
            </Nav>
            <p className='para'>New to Linked in ? <Link to = "/signup"><strong>Join Now</strong></Link></p>
        </Container>

        </div>
    )
}




const Container = styled.div`
    padding:0px;
`;
const Nav = styled.div`
    margin:auto;
    max-width:1128px;
    padding:12px 0 16px;
    display:flex;
    justify-content:space-between;
    flex-wrap:nowrap;
    position:relative;
    align-items:center;


    &>a{
        width:135px;
        height:34px;
        @media(max-width:768px){
            padding:0 5px;
        }
    }
`;
const Form = styled.div`

    margin: auto;
    border: 1px solid black;
    margin-top: 150px;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    background-color: white;
    

    input{
        margin: auto;
       margin-left: 80px;
        margin-top: 20px;

        padding: 15px 10px;
        text-align: left;
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
    }

    button{
        margin: auto;
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px 40px;
        display: flex;
        border-radius: 5px;

        
        
    }
    

   

   strong{
       color: blue;
       font-size: 18px;
       margin-left: 80px;
       border-radius: 70px;
       
    }
    
    @media (max-width:768px){
        margin-top: 20px;
        
    }

`;



export default Signin;