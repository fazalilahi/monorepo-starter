import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Appshell: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
        <div>Header</div>
        {children}
        <div>Footer</div>
    </React.Fragment>
  )
}

export default Appshell