"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
    {
        icon: "⚖",
        title: "Defesa Criminal",
        subtitle: "Tribunal de Justiça",
        description:
            "Representação completa em processos criminais. Investigação de evidências, interrogatório de testemunhas e construção de argumentos irrefutáveis para garantir a absolvição do cliente.",
        tags: ["Júri Popular", "Habeas Corpus", "Recursos"],
    },
    {
        icon: "📋",
        title: "Direito Civil",
        subtitle: "Contratos & Obrigações",
        description:
            "Assessoria jurídica em questões civis, incluindo disputas contratuais, indenizações por danos morais e materiais, e mediação de conflitos entre partes.",
        tags: ["Contratos", "Indenização", "Mediação"],
    },
    {
        icon: "🔍",
        title: "Investigação Jurídica",
        subtitle: "Análise de Evidências",
        description:
            "Investigação minuciosa de cada detalhe do caso. Análise forense de documentos, reconstituição de fatos e identificação de contradições em depoimentos.",
        tags: ["Perícia", "Documentos", "Testemunhos"],
    },
    {
        icon: "🏛",
        title: "Direito Empresarial",
        subtitle: "Consultoria Corporativa",
        description:
            "Consultoria jurídica para empresas de todos os portes. Elaboração de contratos comerciais, compliance e resolução de disputas societárias.",
        tags: ["Societário", "Compliance", "Contratos"],
    },
    {
        icon: "👨‍👩‍👧‍👦",
        title: "Direito de Família",
        subtitle: "Proteção Familiar",
        description:
            "Atuação sensível e estratégica em questões familiares: divórcio, guarda de filhos, pensão alimentícia e inventários, sempre priorizando o bem-estar da família.",
        tags: ["Divórcio", "Guarda", "Inventário"],
    },
    {
        icon: "📜",
        title: "Recursos e Apelações",
        subtitle: "Instâncias Superiores",
        description:
            "Elaboração de recursos e apelações em instâncias superiores. Revisão de sentenças, embargos de declaração e recursos especiais com argumentação técnica de excelência.",
        tags: ["Apelação", "Embargos", "STJ/STF"],
    },
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    })

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <section id="servicos" className="py-24 bg-[#0f1e3d] text-white relative overflow-hidden">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">
                    Nossos Serviços
                </h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 pl-4"
                                >
                                    <div className="bg-white/10 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm text-white/60 mb-3">{item.subtitle}</p>
                                        <p className="text-sm text-white/80 leading-relaxed mb-4 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => emblaApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition disabled:opacity-30"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => emblaApi?.scrollNext()}
                            disabled={!canScrollNext}
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition disabled:opacity-30"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}