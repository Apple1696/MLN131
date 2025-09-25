import { Navbar1 } from '@/components/navbar'
import { Outlet } from 'react-router'


export default function MainLayout() {
  return (
    <>
      <Navbar1 />
      <main>
        <Outlet />
      </main>
    </>
  )
}
