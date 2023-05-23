import {MDF_Header_Functions, MDF_Main_Functions, MDF_Footer_Functions} from './MDF-Functions.js';
import styles from './styles/MDF-Style.module.css';
import Link from 'next/link';
//==============// ICONS //==============//
import { FaQuestionCircle, FaFacebook, FaInstagram, FaGithubSquare } from "react-icons/fa";



//=================// HEADER //=================//
export const MDF_Header_Componentes = () => {

  
  return (
    <>
     <MDF_Header_Functions />
     <h1>MODIFICADOR DE LETRAS</h1>
    </>
    )
}

//=================// NAV //=================//
export const MDF_Nav_Componentes = () => {
  
  return (
    <>
    <h2>TIPOS DE FONTES</h2>
    <div id={styles.Link_container}>
     <Link href="/" className={styles.Nav_Link} >
     exemplo</Link>
     <Link href="/" className={styles.Nav_Link} >
     exemplo</Link>
     <Link href="/" className={styles.Nav_Link} >
     exemplo</Link>
     <Link href="/" className={styles.Nav_Link}>
     exemplo</Link>
     <Link href="/" className={styles.Nav_Link} >
     exemplo</Link>
    </div>
    </>
    )
}

//=================// MAIN //=================//
export const MDF_Main_Componentes = () => {


  return (
    <>
    <MDF_Main_Functions />
    </>
    )
}

//=================// FOOTER //=================//
export const MDF_Footer_Componentes = () => {
  
  
  return (
    <>
    <p>Sapo Ensaboado &copy; 2023</p>
    <p>CONTATO: exemplo@gmail.com</p>
    <div id={styles.sigaNos_container}>
     <p>SIGA ME NAS REDES SOCIAIS:</p>
     <div id={styles.redesIcon_container} >
      <a href="https://www.facebook.com/profile.php?id=100065617513120&mibextid=ZbWKwL" >
      <FaFacebook className={styles.redesIcon} /></a>
      <a href="https://www.instagram.com/carlosalexandreifood/" >
      <FaInstagram className={styles.redesIcon} /></a>
      <a href="https://github.com/Cars32" >
      <FaGithubSquare className={styles.redesIcon} /></a>
     </div>
    </div>
    </>
    )
};