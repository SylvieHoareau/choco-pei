import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About: React.FC = () => {
    return (
        <>
        <Navbar />
        <main>
            <h1>A propos de nous</h1>
            <p>Notre chocolaterie artisanale est enracinée dans l'amour du cacao et des arômes exotiques de l'île de La Réunion.</p>
        </main>
        <Footer />
        </>
    )
}

export default About;