import React from 'react';
import styles from './States.module.css';
import propTypes from 'prop-types';


const States = ({ title, stats }) => (

    <section className={styles.stateSection}>

        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statList}>
            {stats.map(item => (
                <li className={styles.item} key={item.id}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage} %</span>
                </li>
            ))}
        </ul>

    </section>
);


States.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            label: propTypes.string,
            percentage: propTypes.number,
        }),
    ),
};

export default States;