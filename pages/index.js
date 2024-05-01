import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/main.module.css';
import FeatureList from '../components/FeatureList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FeatureList />
      <div classname={styles.footerMain}>
        <Footer />
      </div>
    </div>
  );
}
