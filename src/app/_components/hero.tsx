export function Hero() {

    return (
        <section id="inicio">

            <header className="fixed left-0 right-0 top-0 z-50 transition-all duration-500 backdrop-blur-sm bg-black/30">
                <div className="container mx-auto flex items-center justify-between py-4 px-4">
                    <nav aria-label="Menu">
                        <ul className="flex flex-row items-center gap-1">
                            <li>
                                <a href="#inicio" className="relative px-4 py-2 text-sm font-medium tracking-wide
                                            text-white/70 hover:text-white transition-colors duration-200
                                            group">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#sobre" className="relative px-4 py-2 text-sm font-medium tracking-wide
                                            text-white/70 hover:text-white transition-colors duration-200
                                            group">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#servicos" className="relative px-4 py-2 text-sm font-medium tracking-wide
                                            text-white/70 hover:text-white transition-colors duration-200
                                            group">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#contato" className="relative px-4 py-2 text-sm font-medium tracking-wide
                                            text-white/70 hover:text-white transition-colors duration-200
                                            group"> 
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-300">
                            Solicitar Orçamento
                        </a>
                    </div>
                </div>
            </header>

        </section>
    );
}
