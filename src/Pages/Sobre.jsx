import ButtonForm from "../Componentes/ButtonForm"

export default function Sobre() {
    return(
        <section className="
            container mx-auto my-5
            w-4/5 h-screen
            text-white
            flex flex-col
            p-1
            items-center
        ">
            <h1 className="
                text-2xl
                font-bold
            ">Sobre nós</h1>
            <p className="
                text-sm
                mb-8
            ">Conheça mais sobre nossa missão e objetivos</p>
            <div className="
                flex flex-col
                justify-center
                gap-20
            ">
                <div className="
                    grid 
                    grid-cols-3
                    place-items-center
                    gap-20
                ">
                    <div className="
                        h-60 w-96
                        bg-slate-900
                        shadow-md
                        p-2
                    ">
                        <h2 className="
                            text-center
                            text-xl
                            font-bold
                            underline
                        ">Missão</h2>
                        <p className="
                            text-sm
                            font-light 
                            mt-4
                        ">
                            A Calculadora de Impacto Ambiental foi criada para educar e conscientizar pessoas
                            sobre como suas escolhas energéticas afetam o planeta. Nosso objetivo é promover a
                            transição para energias limpas de forma acessível e prática.
                        </p>
                    </div>

                    <div className="
                        h-60 w-96
                        bg-slate-900
                        shadow-md
                        p-2
                    ">
                        <h2 className="
                            text-center
                            text-xl
                            font-bold
                            underline
                        ">Objetivos</h2>
                        <ul className="
                            list-decimal
                            ml-5
                            text-sm
                            font-light
                            mt-4
                        ">
                            <li>Reduzem drasticamente as emissões de carbono.</li>
                            <li>Preservam recursos naturais.</li>
                            <li>Contribuem para o combate ao aquecimento global.</li>
                        </ul>
                    </div>

                    <div className="
                        h-60 w-96
                        bg-slate-900
                        shadow-md
                        p-2
                    ">
                        <h2 className="
                            text-center
                            text-xl
                            font-bold
                            underline  
                        ">Funcionamento</h2>
                        <p className="
                            text-sm
                            font-light
                            mt-4
                        ">
                            Nossa ferramenta utiliza dados de consumo de energia, fontes utilizadas e emissões
                            médias para calcular seu impacto ambiental. Os resultados ajudam você a visualizar
                            os benefícios de adotar práticas sustentáveis.  
                        </p>
                    </div>
                </div>

                <div className="
                    p-2
                    flex
                    flex-col
                    items-center
                ">
                    <h2 className="
                        text-center
                        text-xl
                        font-extrabold
                    ">Faça Parte Dessa Mudança</h2>
                    <p className="
                        text-sm
                        font-light
                    ">
                        Experimente nossa calculadora clicando no botão e descubra como você pode ajudar 
                        o planeta!
                    </p>
                    <ButtonForm legenda="Experimentar" />
                </div>
            </div>
        </section>
    )
}