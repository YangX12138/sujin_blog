import React, { Fragment, useEffect } from 'react';
import Top from '../../components/common/Top/Top';
import styles from './Links.module.scss';
import marked from 'marked';

function Links() {
    useEffect(() => {
        let val = marked('## haha\nsdaasas');
        console.log(val);
    }, []);

    return (
        <Fragment>
            <Top/>
            <div className={styles.links}>
                <div className={styles.content}>
                    <p></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Links;