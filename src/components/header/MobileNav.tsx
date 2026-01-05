import logo from "@/assets/wiamlogo.png"
import { cn } from "@/lib/utils"
import { ArrowDown, LucideMenu } from "lucide-react"
import { navLinks } from "@/data/navData"

type MobileNavProps = {
  lng: "de" | "en"
  setLng: React.Dispatch<React.SetStateAction<"de" | "en">>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  drop: string
  setDrop: React.Dispatch<React.SetStateAction<string>>
}

const MobileNav = ({ lng, setLng, open, setOpen, drop, setDrop }: MobileNavProps) => {
  return (
    <header className="md:hidden w-full">
      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* main section */}
      <div className="px-4 py-3 h-18 w-full fixed top-0 left-0 right-0 flex justify-between items-center z-50">
        <div className="font-bold tracking-wider flex gap-2 items-center">
          <button
            type="button"
            onClick={() => setLng("de")}
            className={cn(lng === "de" ? "text-secondary" : "text-secondary/60", "cursor-pointer")}
          >
            DE
          </button>
          <button
            type="button"
            onClick={() => setLng("en")}
            className={cn(lng === "en" ? "text-secondary" : "text-secondary/60", "cursor-pointer")}
          >
            EN
          </button>
        </div>

        <div className="h-full">
          <img src={logo} alt="logo" className="w-32" />
        </div>

        <div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="bg-secondary w-8 aspect-square p-1 text-white rounded-xs z-50"
          >
            <LucideMenu />
          </button>
        </div>

        {/* slider menu */}
        <div
          className={cn(
            "z-50 grid fixed top-0 bottom-0 left-0 w-64 bg-primary/80 backdrop-blur-lg transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <ul className="my-3.5 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.label} className="flex flex-col border-b px-3.5 py-2">
                <div className="flex justify-between font-semibold">
                  <a href={link.href}>{link.label}</a>

                  <button
                    type="button"
                    onClick={() => setDrop((prev) => (prev === link.label ? "" : link.label))}
                  >
                    <ArrowDown
                      className={cn("h-4 transition-transform duration-200", drop === link.label && "rotate-180")}
                    />
                  </button>
                </div>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    drop === link.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <ul className="overflow-hidden">
                    {link.items.map((l) => (
                      <li key={l.href} className="my-2.5 pl-1.5">
                        <a href={l.href}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default MobileNav
