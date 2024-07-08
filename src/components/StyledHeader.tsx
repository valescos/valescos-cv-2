import React from "react";

type StyledHeaderProps = {
  children: React.ReactNode;
};

export default function StyledHeader({ children }: StyledHeaderProps) {
  return (
    <h2 className="text-center font-main text-3xl font-bold tracking-wider">
      {children}
    </h2>
  );
}
