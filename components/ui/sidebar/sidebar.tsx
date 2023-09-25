'use client'

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const routes = [
        {
            icon: Home,
            href: '/',
            label: "Home",
            pro: false
        },
        {
            icon: Plus,
            href: '/companion/new',
            label: "Create",
            pro: true
        },
        {
            icon: Settings,
            href: '/settings',
            label: "Settings",
            pro: true
        },
    ]

    const onNavigate = (route: string, pro: boolean) => {
        router.push(route)
    }
    return ( 
        <div className="flex flex-col h-full text-primary bg-secondary">
            <div className="p-3 flex-1 justify-center">
                <div className="space-y-2">
                    {
                        routes.map((route) => (
                            <div key={route.href} 
                                className={cn(
                                    "cursor-pointer text-mutated-foreground w-full text-xs p-3 justify-center items-center hover:bg-primary/10 hover:text-primary rounded-lg transition",
                                    pathname === route.href && "text-primary bg-primary/10")}
                                onClick={() => onNavigate(route.href, route.pro)}>
                                <div className="flex flex-col flex-1 items-center gap-y-2">
                                    <route.icon className="h-5 w-5"></route.icon>
                                    {route.label}
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;