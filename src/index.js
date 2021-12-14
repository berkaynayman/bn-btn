import React from 'react'
import './styles.module.css'

export const Button = ({ type, text }) => {
  return <button type={type}> {text} </button>
}