import { FC } from "react";
import Persona from "../../models/Persona";
import "./User.css";
interface IProps {
    user:Persona
}

export const User:FC<IProps> = ({user:{email, fullName, githubProfileImageUrl}}):JSX.Element => {
  return (
    <div className="container">
        <div className="child">
            <img src={githubProfileImageUrl} alt="GitHub image of the user"/>
            <h1>{fullName}</h1>
            <p>{email}</p>
        </div>
    </div>
  )
}
