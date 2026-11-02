import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Menu, X, PawPrint} from 'lucide-react'
const links=[['Home','/'],['Puppies','/puppies'],['Happy families','/happy-families'],['How it works','/how-it-works'],['FAQ','/faq'],['Visit & contact','/contact']]
export default function Header(){
 const [open,setOpen]=useState(false)
 return <header className="header"><div className="topline">A little love goes a long way <span>✦</span> Dubai, UAE</div>
 <div className="nav-wrap container"><Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark"><PawPrint size={22}/></span><span>TeddyPups<small>U.A.E.</small></span></Link>
 <nav className={open?'nav open':'nav'}>{links.map(([t,p])=><NavLink key={p} to={p} onClick={()=>setOpen(false)}>{t}</NavLink>)}<a className="nav-whatsapp" href="https://wa.me/971541676733" target="_blank" rel="noreferrer">WhatsApp us ↗</a></nav>
 <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></header>
}