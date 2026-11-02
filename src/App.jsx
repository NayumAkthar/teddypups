import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Puppies from './pages/Puppies'
import PuppyDetail from './pages/PuppyDetail'
import {HappyFamilies,HowItWorks,Delivery,FAQ,Contact} from './pages/ContentPages'
import {MessageCircle} from 'lucide-react'
function NotFound(){return <main className="section container"><h1>Page not found</h1><a href="/">Back home</a></main>}
export default function App(){return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/puppies" element={<Puppies/>}/><Route path="/puppies/:id" element={<PuppyDetail/>}/><Route path="/happy-families" element={<HappyFamilies/>}/><Route path="/how-it-works" element={<HowItWorks/>}/><Route path="/delivery" element={<Delivery/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/><a className="floating-whatsapp" href="https://wa.me/971541676733" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a></> }