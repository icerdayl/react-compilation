import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import Header from "./Header"
import MainContent from "./Main"
import Footer from "./Footer"

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
