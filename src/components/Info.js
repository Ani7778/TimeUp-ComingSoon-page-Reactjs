import React from 'react';
import classes from './Info.module.css';

const Info = ()=> {
    return (
        <div className={classes.container}>
            <div className={classes.info_item}>
                <h3>Phone</h3>
                <p>
                    Phone: (000) 654 1234<br />
                    Mobile: (000) 654 0101
                </p>
            </div>
            <div className={classes.info_item}>
                <h3>Email</h3>
                <p>
                    Support@example.com <br />
                    me@example.com
                </p>
            </div>
            <div className={classes.info_item}>
                <h3>Address</h3>
                <p>
                    654 Your Street, Your City, PI<br />
                    12345
                </p>
            </div>


        </div>
    );
};

export default Info;
