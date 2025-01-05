import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <header>
                <h1>Découvrez nos chocolats d'exception</h1>
                <p>Un voyage gustatif au coeur du cacaco et des saveurs tropicales.</p>
            </header>
            <Footer />
        </>
    )
}

export default Home;