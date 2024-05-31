import { FC } from "react"

const Header: FC<IHeader> = ({ name }) => {
    return (
        <>
            <h4>Welcome, {name}!</h4>
        </>
    )
  }
  
  export default Header