import RightSidebar from '@/components/RightSidebar'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Zeke'}
  return (
    <section className="home"> 
    <div className="home-content">
        <header className="home-header"> 
            <HeaderBox type="greeting"
            title="welcome"
            user= {loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently. Time is money after all."
             />
           
           <TotalBalanceBox
           accounts = {[]}
           totalBanks={1}
           totalCurrentBalance={1250.35}
           />
        </header>


        Recent Transactions
    </div>

    <RightSidebar 
    user={loggedIn}
    transactions={[]}
    banks={[]}
    
    />
    </section>
  )
}

export default Home
