import Navbar from "../Navbar"

const BaseLayout = ({ children }: { children: React.ReactNode }) => (
    <div>
        <Navbar />
        <main className="padding-config bg-primary min-h-screen">
            {children}
        </main>
    </div>
)

export default BaseLayout
