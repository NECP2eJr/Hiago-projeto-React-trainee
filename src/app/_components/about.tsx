import Image from "next/image"
import pessoa from "../../../public/img/perso.png"
import logo from "../../../public/img/logo.png"

export function About() {
    return (
        <section id="sobre" className="text-white relative overflow-hidden min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/img/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

            <div className="absolute inset-0 bottom-100 hidden md:block">
                <Image
                    src={logo}
                    alt="Logo"
                    quality={100}
                    fill
                    priority
                    className="object-contain"
                />

            </div>

            <div className="absolute inset-0 bottom-150 md:hidden">
                <Image
                    src={logo}
                    alt="Logo"
                    quality={100}
                    fill
                    priority
                    className="object-contain"
                />

            </div>

            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative z-20 w-72 h-[520px] flex-shrink-0 -mr-16">
                    <Image
                        src={pessoa}
                        alt="Phoenix"
                        quality={100}
                        fill
                        priority
                        className="object-contain object-bottom"
                    />
                </div>


                <div className="relative z-10">
                    <div className="text-gray-800 rounded-2xl p-10"
                        style={{
                            background: "linear-gradient(135deg, #fffef9 0%, #f5f0e8 100%)",
                            boxShadow: "4px 4px 0px #d4c9a8, 8px 8px 20px rgba(0,0,0,0.3)",
                        }}>

                        <div className="border-l-4 border-blue-800 pl-4 mb-6">
                            <span className="text-xs font-semibold tracking-widest text-blue-800 uppercase">
                                Sobre Nós
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-1 leading-tight">
                            Ace Artonney
                        </h2>
                        <p className="text-sm text-blue-800 font-medium mb-5 tracking-wide">
                            Advocacia Civil & Consultoria Jurídica
                        </p>

                        <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                            <p>
                                Fundado pelo Dr. Phoenix Artonney, o escritório <strong>Ace Artonney</strong> nasceu
                                da convicção de que a justiça não é um privilégio — é um direito de todos.
                                Atuamos há mais de uma década na defesa dos interesses civis dos nossos clientes,
                                com rigor, ética e determinação.
                            </p>
                            <p>
                                Especializados em direito civil, contratual, de família e responsabilidade civil,
                                oferecemos assessoria jurídica completa: da análise do caso à representação em juízo.
                                Cada processo é tratado com atenção individual e estratégia personalizada.
                            </p>
                            <p>
                                Acreditamos que cada detalhe de um contrato, cada cláusula e cada argumento
                                pode ser decisivo. Por isso, não deixamos nada ao acaso.
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs font-bold">⚖</span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 italic">
                                "Senhoras e senhores, se vocês vão planejar um assassinato, vocês não esquecem a arma!"
                                <br />
                                <strong className="text-gray-700 not-italic">— Dr. Phoenix Artonney, OAB/XX 00001</strong>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}