import { IButtonProps } from '@/utils/Types'
import React from 'react'

const Button:React.FC<IButtonProps> = ({
 children, onClick, disabled, className
 
}) => {
  return (
    <div>
    <button type='submit' onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  </div>
  )
}

export default Button
