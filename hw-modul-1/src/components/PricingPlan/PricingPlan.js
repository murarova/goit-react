import React from 'react';
import PricingItem from './PricingItem';
import styles from './PricingItem.module.css';
import propTypes from 'prop-types';


const PricingPlan = ({ items }) => (
    <ul className={styles.listItem}>
        {items.map(item => (
            <li className={styles.item} key={item.id}>
                <PricingItem item={item} />
            </li>
        ))}
    </ul>
);

PricingPlan.propTypes = {
    items: propTypes.array.isRequired,
}

export default PricingPlan; 
