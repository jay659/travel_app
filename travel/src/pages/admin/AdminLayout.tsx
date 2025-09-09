import { Outlet } from "react-router-dom"
import {NavItems} from "@/components";



export const Component = () =>  {
  return (
    <section className="admin-layout pt-5">
    
        <aside className="w-max max-w-[270px] hidden lg:block"> 
          <NavItems />
        </aside>
        <Outlet />
    </section>
  )
}

Component.displayName = "Admin";