import React from 'react';
import styles from './PricingItem.module.css';
import propTypes from 'prop-types';


const PricingItem = ({ item }) => (
    <div className={styles.pricingItem}>
        <div className={styles.iconWrapper}>
            <i
                className={styles.icon}
                style={{ backgroundImage: `url( ${item.icon})` }}
            />
        </div>
        <h2 className={styles.label}>{item.label}</h2>
        <p className={styles.capacity}>{item.capacity}</p>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>$ {item.price} /MO</p>
        <button className={styles.button}>Get Started</button>
    </div>
);

PricingItem.propTypes = {
    item: propTypes.shape({
        id: propTypes.number,
        label: propTypes.string,
        icon: propTypes.string,
        capacity: propTypes.string,
        price: propTypes.number,
        description: propTypes.string,
    }).isRequired
};

export default PricingItem;



