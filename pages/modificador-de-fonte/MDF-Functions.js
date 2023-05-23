import {useState, useRef, useEffect} from 'react';
import Router from "next/router";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaQuestionCircle, FaRegHandPointDown } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from './styles/MDF-Style.module.css';
import fontes from './fontes.js';




//=================// HEADER //=================//
export const MDF_Header_Functions = () => {
  const [siteInfor, setSiteInfor] = useState(false);
  
  const ChaSiteInfor = () => setSiteInfor(!siteInfor)
  
  return (
    <>
    <div id={styles.img_container}>
    <BsFillChatDotsFill id={styles.inforIcon} 
    onClick={ChaSiteInfor}
    />
     <img src="/SapoEnsaboadoImg.png" alt="Sapo Ensaboado" id={styles.SapoImg} />
    </div>
    {siteInfor && (
    <div id={styles.inforDSite} >
     <div id={styles.infor_Header} >
      <h1>MODIFICADOR DE LETRAS</h1>
      <AiOutlineCloseCircle id={styles.closeIcon} onClick={ChaSiteInfor}/>
     </div>
     <div className={styles.infor_content} >
      <div className={styles.infor_text} >
      <h3>O QUE É MODIFICADOR DE FONTE ?</h3>
       <p>Modificador de fonte (letras) nada mais é do que uma ferramenta que modifica o texto original para outro texto com um design diferente</p>
      </div>
      
      <div className={styles.infor_text} >
      <h3>AONDE PODE SER USADO ?</h3>
       <p>esses textos modificados podem ser usados no Instagram, Facebook além de outras redes sociais e também em Nicks (nomes) em jogos online como por exemplo Free fire</p>
      </div>
      
      <span>PARA USAR ESSA FERRAMENTA 
      <a href="#campo1" onClick={ChaSiteInfor}>CLIQUE AQUI</a></span>
      
     </div>
    </div>
    )}
    </>
    )
}

//=================// MAIN //=================//
export const MDF_Main_Functions = () => {
const textArea1Ref = useRef(null);
const textArea2Ref = useRef(null);
const textArea3Ref = useRef(null);
const textArea4Ref = useRef(null);
const textArea5Ref = useRef(null);
const textArea6Ref = useRef(null);
const textArea7Ref = useRef(null);
const textArea8Ref = useRef(null);
const textArea9Ref = useRef(null);
const [comoUsar, setComoUsar]= useState(false)

 const ChaComoUsar = () => setComoUsar(!comoUsar)

/*===
//===============// FONTES FUNCTIONS
===*/
const validarLetras = "aáâãàäbcçdeéêèëfghiíîìïjklmnoóõôòöpqrstuúûùüvwxyzAÁÂÃÀÄBCÇDEÉÊÈËFGHIÍÎÌÏJKLMNOÓÕÔÒÖPQRSTUÚÛÙÜVWXYZ0123456789";

//=====÷====÷// FONTES COMUNS
const MDF_01 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[0][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_02 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[1][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_03 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[2][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_04 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[3][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_05 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[4][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_06 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[5][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_07 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[6][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_08 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[7][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_09 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[8][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_10 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea2Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[9][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_11 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[10][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_12 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[11][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_13 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[12][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_14 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[13][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_15 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[14][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_16 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[15][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_17 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[16][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_18 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[17][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_19 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[18][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_20 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea3Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.fontesComuns[19][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
//=====÷====÷// OUTRAS FONTES
const MDF_21 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[0][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_22 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[1][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_23 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[2][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_24 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[3][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_25 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[4][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_26 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[5][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_27 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[6][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_28 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[7][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_29 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[8][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_30 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea4Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[9][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_31 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[10][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_32 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[11][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_33 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[12][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_34 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[13][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_35 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[14][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_36 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[15][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_37 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[16][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_38 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[17][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_39 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[18][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_40 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea5Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[19][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_41 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[20][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_42 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[21][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_43 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[22][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_44 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[23][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_45 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[24][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_46 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[25][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_47 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[26][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_48 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[27][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_49 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[28][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_50 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea6Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[29][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_51 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[30][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_52 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[31][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_53 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[32][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_54 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[34][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_55 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[35][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_56 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[36][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_57 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[37][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_58 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[38][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_59 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[39][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_60 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[40][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_61 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea7Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[41][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_62 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[42][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_63 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[43][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_64 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[44][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_65 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[45][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_66 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[46][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_67 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[47][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_68 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[48][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_69 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[49][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_70 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[50][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_71 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[51][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_72 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[52][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_73 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea8Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[53][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_74 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[54][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_75 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[55][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_76 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[56][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_77 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[57][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_78 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[58][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_79 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[59][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_80 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[60][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_81 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[61][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_82 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[62][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_83 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[63][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
const MDF_84 = () => {
 var textarea1 = textArea1Ref.current.value;
 var resultTextarea = textArea9Ref.current;
 
 var result = ""
 for(let i = 0; i < textarea1.length; i++){
  var charAt = textarea1.charAt(i)
  var indexOf = validarLetras.indexOf(charAt);
  if(indexOf != -1) result += fontes.outrasFontes[64][indexOf]
  else result += charAt
 }
 resultTextarea.value = result
}
/*===
//===============// FIM DAS FONT FUNCTIONS 
===*/



  return (
    <>
{/*===
//===============// CAMPO 1
===*/}
     <div className="container" id={styles.campo1} >
     <label for="textarea">
     COMO FUNCIONA <a href="#campo1"><FaQuestionCircle className={styles.duvIcon} onClick={ChaComoUsar} /></a>
     </label>
     {comoUsar && (
    <>
     <div className={styles.tuto}>
      <h4>Escreva o texto no qual você quer que seja modificado aqui embaixo</h4>
     </div>
     <FaRegHandPointDown className={styles.duvIcon} />
    </>
     )}
     <textarea name="textarea" id="campo1" ref={textArea1Ref}
     rows="3" cols="32" placeholder="Escreva seu texto aqui"></textarea>
     </div>
     
     
     <div id={styles.font_container} >
     <div className={styles.font_type}>
        <h2>FONTES COMUNS</h2>
     {comoUsar && (
     <>
      <div className={styles.tuto}>
       <h4>após escrever seu texto acima
       escolha a modificação de letra abaixo (apenas clique no círculo)</h4>
      </div>
      <FaRegHandPointDown className={styles.duvIcon} />
     </>
     )}
     </div>
     
      <div className={styles.font_type_container} >
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_01} /> - 𝗧𝗲𝘅𝘁𝗼 𝗳𝗶𝗰𝗮𝗿𝗮 𝗮𝘀𝘀𝗶𝗺</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_02} /> - 𝐓𝐞𝐱𝐭𝐨 𝐟𝐢𝐜𝐚𝐫𝐚 𝐚𝐬𝐬𝐢𝐦</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_03} /> - ᴛᴇxᴛᴏ ғɪᴄᴀʀᴀ ᴀssɪᴍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_04} /> - 𝚃𝚎𝚡𝚝𝚘 𝚏𝚒𝚌𝚊𝚛𝚊 𝚊𝚜𝚜𝚒𝚖</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_05} /> - 𝕋𝕖𝕩𝕥𝕠 𝕗𝕚𝕔𝕒𝕣𝕒 𝕒𝕤𝕤𝕚𝕞</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_06} /> - 𝙏𝙚𝙭𝙩𝙤 𝙛𝙞𝙘𝙖𝙧𝙖 𝙖𝙨𝙨𝙞𝙢</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_07} /> - 𝑻𝒆𝒙𝒕𝒐 𝒇𝒊𝒄𝒂𝒓𝒂 𝒂𝒔𝒔𝒊𝒎</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_08} /> - 𝘛𝘦𝘹𝘵𝘰 𝘧𝘪𝘤𝘢𝘳𝘢 𝘢𝘴𝘴𝘪𝘮</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_09} /> - 𝑇𝑒𝑥𝑡𝑜 𝑓𝑖𝑐𝑎𝑟𝑎 𝑎𝑠𝑠𝑖𝑚</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_10} /> - 𝓣𝓮𝔁𝓽𝓸 𝓯𝓲𝓬𝓪𝓻𝓪 𝓪𝓼𝓼𝓲𝓶</label>
         </div>
         <textarea name="textarea" ref={textArea2Ref} rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
        
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_11} /> - 𝒯𝑒𝓍𝓉𝑜 𝒻𝒾𝒸𝒶𝓇𝒶 𝒶𝓈𝓈𝒾𝓂</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_12} /> - 𝕿𝖊𝖝𝖙𝖔 𝖋𝖎𝖈𝖆𝖗𝖆 𝖆𝖘𝖘𝖎𝖒</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_13} /> - 𝔗𝔢𝔵𝔱𝔬 𝔣𝔦𝔠𝔞𝔯𝔞 𝔞𝔰𝔰𝔦𝔪</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_14} /> - ᵀᵉˣᵗᵒ ᶠⁱᶜᵃʳᵃ ᵃˢˢⁱᵐ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_15} /> - ₜₑₓₜₒ fᵢcₐᵣₐ ₐₛₛᵢₘ</label>
          </div>
          <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_16} /> - T̶e̶x̶t̶o̶ f̶i̶c̶a̶r̶a̶ a̶s̶s̶i̶m̶</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_17} /> - ₮ɆӾ₮Ø ₣ł₵₳Ɽ₳ ₳₴₴ł₥</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_18} /> - TE᙭TO ᖴIᑕᗩᖇᗩ ᗩᔕᔕIᗰ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_19} /> - 🅣🅔🅧🅣🅞 🅕🅘🅒🅐🅡🅐 🅐🅢🅢🅘🅜</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_20} /> - 🅃🄴🅇🅃🄾 🄵🄸🄲🄰🅁🄰 🄰🅂🅂🄸🄼</label>
         </div>
         <textarea name="textarea"  ref={textArea3Ref}
         rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
      </div>
{/*===
//===============// OUTRAS FONTES
===*/}
      <div className={styles.font_type}>
        <h2>OUTRAS FONTES</h2>
      </div>
      <div className={styles.font_type_container} >
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_21} /> - ᖶᘿ᙭ᖶᓍ ᖴᓰᑢᗩᖇᗩ ᗩSSᓰᘻ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_22} /> - [̲̅T̲̅][̲̅e̲̅][̲̅x̲̅][̲̅t̲̅][̲̅o̲̅] [̲̅f̲̅][̲̅i̲̅][̲̅c̲̅][̲̅a̲̅][̲̅r̲̅][̲̅a̲̅] [̲̅a̲̅][̲̅s̲̅][̲̅s̲̅][̲̅i̲̅][̲̅m̲̅]</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_23} /> - Ⓣⓔⓧⓣⓞ ⓕⓘⓒⓐⓡⓐ ⓐⓢⓢⓘⓜ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_24} /> - тєχтσ fι¢αяα αѕѕιм</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_25} /> - Ṯệẍẗö ḟïċäŕä äṩṩïṃ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_26} /> - ᏖᏋጀᏖᎧ ᎦᎥፈᏗᏒᏗ ᏗᏕᏕᎥᎷ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_27} /> - ṮḕẌṮṏ ḟḭḉḀṙḀ ḀṠṠḭṁ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_28} /> - T҉e҉x҉t҉o҉ f҉i҉c҉a҉r҉a҉ a҉s҉s҉i҉m҉</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_29} /> - ᏆᎬxᏆᎾ fᎥᏟᎪᏒᎪ ᎪssᎥm</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_30} /> - tєхtσ fícαrα αssím</label>
         </div>
         <textarea name="textarea" ref={textArea4Ref} rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
        
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_31} /> - ȶɛӼȶօ ʄɨƈǟʀǟ ǟֆֆɨʍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_32} /> - T̾e̾x̾t̾o̾ f̾i̾c̾a̾r̾a̾ a̾s̾s̾i̾m̾</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_33} /> - Ｔｅｘｔｏ ｆｉｃａｒａ ａｓｓｉｍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_34} /> - ʇǝxʇo ɟıɔɐɹɐ ɐssıɯ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_35} /> - T̴e̴x̴t̴o̴ f̴i̴c̴a̴r̴a̴ a̴s̴s̴i̴m̴</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_36} /> - T̷e̷x̷t̷o̷ f̷i̷c̷a̷r̷a̷ a̷s̷s̷i̷m̷</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_37} /> - T̲e̲x̲t̲o̲ f̲i̲c̲a̲r̲a̲ a̲s̲s̲i̲m̲</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_38} /> - T̳e̳x̳t̳o̳ f̳i̳c̳a̳r̳a̳ a̳s̳s̳i̳m̳</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_39} /> - 🆃🅴🆇🆃🅾 🅵🅸🅲🅰🆁🅰 🅰🆂🆂🅸🅼</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_40} /> - T͆e͆x͆t͆o͆ f͆i͆c͆a͆r͆a͆ a͆s͆s͆i͆m͆</label>
         </div>
         <textarea name="textarea"  ref={textArea5Ref}
         rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
      </div>
      
      <div className={styles.font_type}>
        <h2>ANUNCIOS</h2>
      </div>
      <div className={styles.font_type_container} >
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_41} /> - T̺e̺x̺t̺o̺ f̺i̺c̺a̺r̺a̺ a̺s̺s̺i̺m̺</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_42} /> - T͙e͙x͙t͙o͙ f͙i͙c͙a͙r͙a͙ a͙s͙s͙i͙m͙</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_43} /> - T̟e̟x̟t̟o̟ f̟i̟c̟a̟r̟a̟ a̟s̟s̟i̟m̟</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_44} /> - T͓̽e͓̽x͓̽t͓̽o͓̽ f͓̽i͓̽c͓̽a͓̽r͓̽a͓̽ a͓̽s͓̽s͓̽i͓̽m͓̽</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_45} /> - T͎e͎x͎t͎o͎ f͎i͎c͎a͎r͎a͎ a͎s͎s͎i͎m͎</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_46} /> - 【T】【e】【x】【t】【o】 【f】【i】【c】【a】【r】【a】 【a】【s】【s】【i】【m】</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_47} /> - 『T』『e』『x』『t』『o』 『f』『i』『c』『a』『r』『a』 『a』『s』『s』『i』『m』</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_48} /> - 🌴🎗❎🌴⚽ 🎏🎐🌜🅰🌱🅰 🅰💲💲🎐〽️</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_49} /> - Tҽxƚσ ϝιƈαɾα αʂʂιɱ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_50} /> - тεxтσ ғιcαяα αssιм</label>
         </div>
         <textarea name="textarea" ref={textArea6Ref} rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
        
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_51} /> - ㄒ乇乂ㄒㄖ 千丨匚卂尺卂 卂丂丂丨爪</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_52} /> - ŤĔЖŤŐ ŦĨČĂŔĂ ĂŚŚĨМ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_53} /> - ʇǝxʇo ɟ!ɔɐɹɐ ɐss!ɯ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_54} /> - Ŧ€ЖŦØ ₣ƗĆΔŘΔ ΔŞŞƗΜ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_55} /> - ƭεאƭσ ƒเ૮α૨α αรรเɱ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_56} /> - tєץt๏ Ŧเςคгค ครรเ๓</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_57} /> - тeхтo ғιcara aѕѕιм</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_58} /> - 🇹​🇪​🇽​🇹​🇴​ 🇫​🇮​🇨​🇦​🇷​🇦​ 🇦​🇸​🇸​🇮​🇲​</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_59} /> - ț£×ț¤ ƒȋçåȑå å§§ȋɱ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_60} /> - ţ€жţ๏ ƒɨȼąяą ą$$ɨʍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_61} /> - ནპჯནõ fἶემΓმ მჰჰἶო</label>
         </div>
         <textarea name="textarea" ref={textArea7Ref} rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
       </div>
       
       <div className={styles.font_type}>
        <h2>ANUNCIOS</h2>
       </div>
       <div className={styles.font_type_container} >
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_62} /> - ŤẸЖŤỖ ƑĮČÃŘÃ ÃŜŜĮϻ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_63} /> - ᖶᙍ᙭ᖶᓎ ᖴᓿᑤᗅᖇᗅ ᗅSSᓿᙢ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_64} /> - tєхtσ fícαrα αѕѕím</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_65} /> - ţέxţό ғίςάŕά άşşίм</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_66} /> - ✞Ǝ✘✞ø ƒîℂДЯД ДƧƧîℳ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_67} /> - ΓΞЖΓФ FICДЯД ДSSIM</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_68} /> - ᏆɛxᏆօ ʄɨƈǟʀǟ ǟֆֆɨʍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_69} /> - TԵҽ×Եօ ƒíϲɑɾɑ ɑՏՏíʍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_70} /> - ꓄ꍟꊼ꓄ꂦ ꎇꀤꉓꍏꋪꍏ ꍏꌗꌗꀤꎭ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_71} /> - ᵀᴱˣᵀᴼ ᶠᴵᶜᴬᴿᴬ ᴬˢˢᴵᴹ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_72} /> - тeхтo ғιcαrα αѕѕιм</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_73} /> - ŤƐχŤØ FɪㄈΛ尺Λ Λららɪ௱</label>
         </div>
         <textarea name="textarea" ref={textArea8Ref} rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
        
        <div className={styles.font_type_content} >
         <div className={styles.radio_container} >
          <label for="radio"><input type="radio" name="radio" onClick={MDF_74} /> - ƬЄҲƬƠ ƑƖƇƛƦƛ ƛƧƧƖM</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_75} /> - ϮꂅꊼϮԾ ꊰᎥ꒝ᕱᏒᕱ ᕱᏕᏕᎥო</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_76} /> - ੮૯૪੮૦ Բɿ८คՐค คςςɿɱ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_77} /> - ԵȝՃԵԾ ԲɿՇԹՐԹ ԹՏՏɿʍ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_78} /> - Tｲ乇ﾒｲの ｷﾉᄃﾑ尺ﾑ ﾑ丂丂ﾉﾶ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_79} /> - †εx†⊕ ƒïςαrα αššïm</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_80} /> - Ttēxt໐ fi¢คrค คŞŞi๓</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_81} /> - ɬɛҳɬơ ʄıƈąཞą ąʂʂıɱ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_82} /> - ꓄ꏂꉧ꓄ꄲ ꊰ꒐ꉔꋬꋪꋬ ꋬꇙꇙ꒐ꂵ</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_83} /> - T͢e͢x͢t͢o͢ f͢i͢c͢a͢r͢á a͢s͢s͢i͢m͢</label>
          <label for="radio"><input type="radio" name="radio" onClick={MDF_84} /> - ☂€⌘☂⊙ Ϝ♗☾ꍏ☈á ꍏⓢⓢ♗♔</label>
         </div>
         <textarea name="textarea" ref={textArea9Ref} rows="3" cols="32" placeholder="Seu texto modificado sairá aqui"></textarea>
        </div>
       </div>
       
     </div>
    </>
    )
}

//=================// FOOTER //=================//
export const MDF_Footer_Functions = () => {


  return (
    <>
    
    </>
    )
}