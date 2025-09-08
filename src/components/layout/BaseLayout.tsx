import Footer from "../Footer"
import Navbar from "../Navbar"

const BaseLayout = ({ children }: { children: React.ReactNode }) => (
    <div>
        <Navbar />
        <main className="padding-config bg-primary min-h-screen">
            {children}
        </main>
        <Footer />
    </div>
)

export default BaseLayout
