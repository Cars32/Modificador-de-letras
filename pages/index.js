import { Inter } from '@next/font/google';

import {ModificadorDeLetras, } from './modificador-de-fonte/MDF-Body.js';



const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
     <ModificadorDeLetras />
    </>
  )
}