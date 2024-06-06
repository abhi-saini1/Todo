'use client';
import clsx from "clsx";
import { ReactNode } from "react";
import { RiMenu2Fill } from "react-icons/ri";
interface ButtonProps {
  type?: "button" | "submit" | "reset"
  text: string | ReactNode
  onClick?: () => void
  actionButton?: boolean 
}
const Button = ({type,text,onClick,actionButton}:ButtonProps) => {
  return (
    <>
      <button
      type={type}
      onClick={onClick}
      className={clsx(actionButton && 'bg-green-600 rounded-full p-2 text-white', 'bg-green-600 px-2 text-white rounded-sm')}>{text}</button>
    </>
   
  )
}

export default Button