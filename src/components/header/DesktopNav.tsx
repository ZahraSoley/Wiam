import logo from "@/assets/wiamlogo.png"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { leftLinks, rightLinks } from "@/data/navData"

type DesktopNavProps = {
  lng: "de" | "en"
  setLng: React.Dispatch<React.SetStateAction<"de" | "en">>
}

const DesktopNav = ({ lng, setLng }: DesktopNavProps) => {
  return (
    <header className="w-full hidden md:block">
      {/* Top bar */}
      <div className="w-full mx-auto h-8 lg:h-10 bg-secondary">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between z-50">
          <div className="flex items-center gap-5">
            <div className="text-sm lg:text-[1rem] font-bold tracking-wider flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setLng("de")}
                className={cn(lng === "de" ? "text-primary" : "text-background", "cursor-pointer")}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLng("en")}
                className={cn(lng === "en" ? "text-primary" : "text-background", "cursor-pointer")}
              >
                EN
              </button>
            </div>

            <div className="flex gap-1.5 items-center">
              <input
                type="search"
                className="border-b-background border-b h-5 lg:h-7 w-36 lg:w-48 my-1.5 text-white style-non"
              />
              <Search className="text-background w-5 lg:w-8" />
            </div>
          </div>

          <div>
            <a className="text-sm font-bold lg:text-lg text-background hover:text-primary" href="">
              Kundenbereich
            </a>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="fixed top-8 lg:top-10 left-0 right-0 z-50 bg-background/70 backdrop-blur-sm font-[Roboto] max-w-7xl mx-auto rounded-xs flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2.5">
        {/* left nav */}
        <nav>
          <ul className="flex justify-center items-center gap-3.5 lg:gap-10">
            {leftLinks.map((link) => (
              <li key={link.label} className="relative group/nav">
                <a className="uppercase font-medium lg:text-xl" href={link.href}>
                  {link.label}
                </a>
                <div className="absolute w-0 group-hover/nav:w-full h-0.5 bg-foreground transition-[width] duration-300 ease-out" />
                <div className="absolute left-0 pt-5 opacity-0 -translate-y-2 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-200 ease-out">
                  <ul className="grid gap-1.5 w-65 p-5 bg-primary/95 rounded-xs">
                    {link.items.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="inline-flex items-center gap-2 no-underline group/item">
                          <span className="font-medium">&gt;</span>
                          <span className="group-hover/item:underline group-hover/item:font-medium underline-offset-4">
                            {l.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* logo */}
        <div className="h-full">
          <img src={logo} alt="logo" className="w-32 lg:w-36" />
        </div>

        {/* right nav */}
        <nav>
          <ul className="flex justify-center items-center gap-3.5 lg:gap-10">
            {rightLinks.map((link) => (
              <li key={link.label} className="relative group/nav">
                <a className="uppercase font-medium lg:text-xl" href={link.href}>
                  {link.label}
                </a>

                <div className="absolute w-0 group-hover/nav:w-full h-0.5 bg-foreground transition-[width] duration-300 ease-out" />

                <div className="absolute left-0 pt-5 opacity-0 -translate-y-1.5 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-200 ease-out">
                  <ul className="grid gap-1.5 w-65 p-5 bg-primary/95 rounded-xs shadow-lg">
                    {link.items.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="inline-flex items-center gap-2 no-underline group/item">
                          <span className="font-medium">&gt;</span>
                          <span className="group-hover/item:underline group-hover/item:font-medium underline-offset-4">
                            {l.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default DesktopNav
