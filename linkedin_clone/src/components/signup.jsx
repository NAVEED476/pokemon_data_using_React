import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import { useAuth } from "../Contexts/Authcontext";



const Login = (props) => {

   
    
    return (
        <Container>
            <Nav>
                <a href="">
                    <img src="images/login-logo.svg" alt="" />

                </a>
                <div>
                    <Discover>Discover</Discover>
                    <People>People</People>
                    <Learning>Leraning</Learning>
                    <Jobs>Jobs</Jobs>
                    <Join>Join Now</Join>
                    <Signin>
                        <Link to="/signin">Sign in</Link>
                    </Signin>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional Community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>

                <Form>
                    <form action="">
                        <input type="text" placeholder="Enter Your First Name" /><br />
                        <input type="text" placeholder="Enter Your Last Name"/><br />
                        <input type="text" placeholder="Enter Email / Number"/><br />
                        <input type="text" placeholder="Enter your password"/>
                    </form>
                    <button>Submit</button>

                    <span>already have an account? <Link to="/signin">Login</Link> 
                    
                    </span>
                </Form>
                
                
            </Section>

        
        </Container>
        
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

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,1);
        text-decoration: none;
        border-radius: 4px;
    }
`;

const Signin = styled.a`
    box-shadow:inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius:24px ;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight:600px;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color:rgba(12,181,249,0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

const Section = styled.section`
    display: flex;
    align-content:start ;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width:768px){
        margin: auto;
        min-height: 0px;
    }
`;
const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;line-height:70px;
        @media (max-width:768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width:768px){
            top:230px;
            width: initial;
            position: initial;
            height: initial;

        }
    }
`;

const Form = styled.div`

    margin-top: 100px;
    width: 408px;

    input{
       display: grid;
       align-items: center;
       gap: 10px;
       font-size: 18px;
       padding: 5px;

       @media (max-width:786px){
           input{
               width: 100%;

           }
           
       }
       @media (max-width:1200px){
           
       }
    }

    button{
        margin: auto;
        margin-top: 20px;
        margin-bottom: 60px;
        padding: 10px 40px;
        display: flex;
        border-radius: 5px;

        
        
    }
    

    span{
        margin: auto;
        margin-top: 100px;
        border: 1px solid black;
        font-size: 18px;
        padding: 20px 60px;

        @media (max-width:768px){
            width: 100%;
            font-size: 14px;
            padding:  1% 4%;
        }
    }

    strong:hover{
        color: blue;
        font-size: 18px;
    }
    
    @media (max-width:768px){
        margin-top: 20px;
        
    }

`;

const Google = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    border-radius: 28px;
    width: 100%;
    box-shadow: inset 0 0 0 1px ;
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: gray;
    &:hover{
        background-color: gray;
        color: black;
    }
`;

const Discover = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,1);
        text-decoration: none;
        border-radius: 4px;
    }
`;

const People = styled.a`
font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,1);
        text-decoration: none;
        border-radius: 4px;
    }`;


const Learning = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,1);
        text-decoration: none;
        border-radius: 4px;
    }
`;
const Jobs = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,1);
        text-decoration: none;
        border-radius: 4px;
    }
`;
export default Login;