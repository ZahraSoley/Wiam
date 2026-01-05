import { useState } from "react"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
  const [lng, setLng] = useState<"de" | "en">("de")
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState<string>("")

  return (
    <>
      <DesktopNav lng={lng} setLng={setLng} />
      <MobileNav
        lng={lng}
        setLng={setLng}
        open={open}
        setOpen={setOpen}
        drop={drop}
        setDrop={setDrop}
      />
    </>
  )
}

export default Header



{/* className="
    absolute left-0 pt-5  
    opacity-0 -translate-y-2 pointer-events-none
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
    transition-all duration-200 ease-out
  "
                > */}

