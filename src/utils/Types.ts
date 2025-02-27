import React from "react";

export interface IButtonProps{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}