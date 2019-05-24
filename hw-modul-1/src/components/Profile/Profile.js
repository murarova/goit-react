import React from 'react';
import styles from './Profile.module.css';
import propTypes from 'prop-types';



const Profile = ({ user }) => (
    <div className ={styles.container}>
        <div className={styles.profile}>
            <div className={styles.description}>
                <div className={styles.imageWrapper}>
                    <img
                        src={user.avatar}
                        alt="user avatar"
                        className={styles.avatar}
                    />
                </div>

                <p className={styles.name}>{user.name}</p>
                <p className={styles.tag}>{user.tag}</p>
                <p className={styles.location}>{user.location}</p>
            </div>

            <ul className={styles.state}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{user.stats.followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{user.stats.views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    </div>
);

Profile.propTypes = {
    user: propTypes.shape({
        name: propTypes.string.isRequired,
        tag: propTypes.string,
        location: propTypes.string,
        avatar: propTypes.string,
        stats: propTypes.shape({
            followers: propTypes.number,
            views: propTypes.number,
            likes: propTypes.number,
        }),
    }),
};

export default Profile;
