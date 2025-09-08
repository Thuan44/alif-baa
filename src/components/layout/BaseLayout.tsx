import { useEffect } from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className="padding-config bg-primary min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default BaseLayout
