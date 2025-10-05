
const Footer = () => {
    return (
        <footer id="kontakt" className="bg-[#6E2E2A] text-[#C6A77C] py-10">
            <div className="w-full sm:container sm:mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">Kontakt</h3>
                        <div className="space-y-2 text-lg hover:text-[#F5F2EF] transition-colors">
                            <a href="mailto:support@brevlycka.se" className="underline transition-colors">support@brevlycka.se</a>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 text-center">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="ml-auto">© 2025 Brevlycka. Alla rättigheter förbehållna.</p>
                            {/* <div className="flex gap-6 text-muted-foreground">
                            <a href="#" className="hover:text-wine-red transition-colors">Kontakt</a>
                            <a href="#" className="hover:text-wine-red transition-colors">Villkor</a>
                            <a href="#" className="hover:text-wine-red transition-colors">Cookies</a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;