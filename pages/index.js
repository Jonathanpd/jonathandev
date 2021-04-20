import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetchGitHub from '../pages/api/api_github'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! Welcome to my <a href="#">Portfolio</a>!
        </h1>

        <p className={styles.description}>
          I'm <a href="#"><b>Jonathan</b></a> from <a href="#">*ProduzDigital</a> {' '}
          <br />
        </p>

        <a href="#">
          <div id='imggithub'></div>
        </a>
        <a href="#"><span className={styles.span}>Jonathan Santos da Silva</span></a>
        <br />
        <code className={styles.code}><a href="#"><b>Front-End Developer</b></a></code>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>About me &rarr;</h3>
            <p>Sobre mim</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Projetos</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>CV (Curriculum) &rarr;</h3>
            <p>
              Currículo
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Learn System (LMS) &rarr;</h3>
            <p>Educação à Distância (EAD) </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://produzirsonhos.digital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://i2.wp.com/produzdigital.com.br/wp-content/uploads/2017/05/cropped-Logo-MENOR-Produz-Digital.png" alt="Jonathan PD Logo" className={styles.logo} />
          <img src="https://produzirsonhos.digital/wp-content/uploads/2020/02/Logo_Produzir-Sonhos-Digital.png" alt="Produzir Sonhos . Digital Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

fetchGitHub('https://api.github.com/users/jonathanpd');