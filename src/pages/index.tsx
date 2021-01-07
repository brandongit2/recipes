import Head from 'next/head';

import styles from './index.modules.scss';

export default function Index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Recipes</title>
            </Head>
            <h1>Recipes</h1>
        </div>
    );
}
