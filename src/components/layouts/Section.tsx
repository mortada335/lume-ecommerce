import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="container px-4 py-5 ">
        {children}
    </div>
  )
}

export default Section