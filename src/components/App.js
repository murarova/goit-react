import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import States from './States/States';
import { user, stats } from './data';
import PricingPlan from './PricingPlan/PricingPlan';
import items from './PricingPlan/pricingPlanItems.json';
import TransactionHistory from './Transaction/Transaction';
import dataTransaction from './Transaction/dataTransaction.json'



const App = () => (
    <Fragment>
        <Profile user={user} />
        <States title="Upload stats" stats={stats} />
        <PricingPlan items={items} />
        <TransactionHistory transaction={dataTransaction} />
    </Fragment>
);


export default App;
