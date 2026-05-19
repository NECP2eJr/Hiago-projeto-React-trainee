export function Footer() {
    return (
        <footer id="contato" className="bg-[#0f1e3d] text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold tracking-wide mb-3">
                            Ace Attorney
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Escritório especializado em direito civil, empresarial
                            e resolução estratégica de conflitos jurídicos.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">
                            Contato
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>(11) 99999-9999</li>
                            <li>contato@aceattorney.com</li>
                            <li>São Paulo - SP</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">
                            Links
                        </h3>
                        <div className="flex flex-col gap-2 text-sm text-gray-300">
                            <a href="https://policies.google.com/privacy?hl=pt-BR" className="hover:text-white transition">
                                Política de Privacidade
                            </a>
                            <a href="https://policies.google.com/privacy?hl=pt-BR" className="hover:text-white transition">
                                Termos de Uso
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>
                        © 2001 Ace Attorney Advocacia. Todos os direitos reservados.
                    </p>

                    <div>
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-300">
                            Solicitar Orçamento
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}