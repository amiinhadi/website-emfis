import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollProgressBar from './ScrollProgressBar'

export default function Layout({ children }:{ children: ReactNode }){
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1 pt-[96px] w-full">{children}</main>
      <Footer />
    </div>
  )
}
