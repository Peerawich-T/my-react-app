import React from 'react'
import ClickCounter from './ClickCounter'
import Car from './Car'
import FirstProp from './FirstProp'
import Header from './Header'
import Reminder from './Reminder'
import NewPage from './NewPage'
const HomePage = () => {
  return (
    <div>
        HomePage
        <Header text="Click Counter Section" />
        <ClickCounter />
        <Car />
        <FirstProp name="Chess" />
        <Header text="Reminder Section" />
        <Reminder />



    </div>
  )
}

export default HomePage