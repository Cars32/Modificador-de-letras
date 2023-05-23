import Head from 'next/head';
import styles from './styles/MDF-Style.module.css';
import {MDF_Header_Componentes, MDF_Main_Componentes, MDF_Footer_Componentes, MDF_Nav_Componentes} from './MDF-Componentes.js';


export const ModificadorDeLetras = () => {

 return (
  <>
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f6fffe" />
    <title>modificador de letra</title>
   </Head>
   
   
   
  <div className="container-fluid" id={styles.MDF_bodyDiv}>
   <header className="" id={styles.MDF_Header}>
    <MDF_Header_Componentes />
   
   </header>
   
   <nav className="container" id={styles.MDF_Nav}>
    <MDF_Nav_Componentes />
    
   </nav>
   
   <main className="container-fluid" id={styles.MDF_Main} >
    <MDF_Main_Componentes />
    
   </main>
   
   <footer className="container-fluid" id={styles.MDF_Footer} >
    <MDF_Footer_Componentes />
    
   </footer>
  </div>
  </>
 );
};