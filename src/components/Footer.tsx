
const Footer = () => {
    return (
        <footer id="kontakt" className="bg-[#6E2E2A] text-[#C6A77C] py-10">
            <div className="w-full sm:container sm:mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">Kontakt</h3>
                        <div className="space-y-2 text-lg">
                            <a href="mailto:info@brevlycka.se" className="block hover:text-[#F5F2EF] underline transition-colors">info@brevlycka.se</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">Mitt konto</h3>
                        <div className="space-y-2 text-lg">
                            <a href="/hantera-konto" className="block hover:text-[#F5F2EF] underline transition-colors">Mitt konto</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#C6A77C]/20 text-center">
                    <p>© 2025 Brevlycka. Alla rättigheter förbehållna.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;