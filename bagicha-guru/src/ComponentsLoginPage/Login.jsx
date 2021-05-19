import React from 'react'
import loginimg from "../Newfolder/loginimg.png"
import styled from "styled-components"
import google from "../Newfolder/google.png"
import facebook from "../Newfolder/fb.png"

const Login = () => {
    return (
        <Container>
            <Leftimg>
                <Imgs src={loginimg} alt="design"/>
            </Leftimg>
            <RightCol>
                <LoginDetails>
                    <h3>Log In To Your Account</h3>
                    <LoginInput placeholder="Email or phone number"/><br/>
                    <LoginInput placeholder="Password"/>
                    <ForgetPassword>Forget Password</ForgetPassword>
                    <LoginButton>Login</LoginButton>
                </LoginDetails>
                <div style={{
                    textAlign:"center"
                }}>
                    <p>or login with</p>
                    <div style={{
                        width:"12%",
                        margin:"auto",
                        display:'flex',
                        gap:"10px",
                    }}>
                        <Logo src={google} alt="google"/>
                        <Logo src={facebook} alt="facebook"/>
                    </div>
                    <p>Need an account ? Sign up</p>
                </div>
            </RightCol>
        </Container>
    )
}

export {Login}

const Container = styled.div`
    display:flex;
    gap:10%
`
const Leftimg = styled.div`
    left:0;
    width:40%;
    margin-Top:-3px;
`
const Imgs = styled.img`
    background:transparent;
    width:100%;
    height:100vh;
    left:0;
    background:transparent;
`
const RightCol = styled.div`
    align-items: center;
    width:50%;
`
const LoginDetails = styled.div`    
    padding-top: 15%;
    width:50%;
    marginTop:50px;
    margin:auto;
`
const LoginInput = styled.input`
    background : #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #808080;
    border-radius: 4px;
    height: 40px;
    width:99%;
    margin-bottom: 10px;
`
const ForgetPassword = styled.p`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) Roboto;
    color: #374375;
    text-align: right;
    font-size : 12px;
    margin-bottom: 20px
`
const LoginButton = styled.button`
    background: #41C4BA 0% 0% no-repeat padding-box;
    border-radius: 4px;
    color: white;
    outline: none;
    border: none;
    width:100%;
    height: 40px;
`
const Logo = styled.img`
    width: 50%;
    margin:10px;
    margin:auto;
`
