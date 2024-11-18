import { useEffect, useState } from "react"

const FormCalculadora = () => {
    const [usoEnergia, setUsoEnergia] = useState("")
    const [energiaRenovavel, setEnergiaRenovavel] = useState("")
    const [carbonRedu, setCarbonRedu] = useState(null)
    const [resultadosSalvos, setResultadosSalvos] = useState([])

    useEffect(() => {
        const savedResults = JSON.parse(localStorage.getItem("resultados")) || []
        setResultadosSalvos(savedResults)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const reduction = (usoEnergia * energiaRenovavel * 0.85) / 100
        setCarbonRedu(reduction)

        setUsoEnergia("")
        setEnergiaRenovavel("")
    }

    const clear = () => {
        setCarbonRedu(null)
    }

    const saveResult = () => {
        if (carbonRedu !== null) {
            const newResult = {
                id: Date.now(),
                value: carbonRedu.toFixed(2),
                data: new Date().toLocaleDateString("pt-br", {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                }),
            }

            const updateResult = [...resultadosSalvos, newResult]
            setResultadosSalvos(updateResult)
            localStorage.setItem("resultados", JSON.stringify(updateResult))

            setCarbonRedu(null)
        }

        
    }

    return(
        <form className="
            w-full
            flex flex-col
            justify-center
            gap-10
            p-5
            pl-8
        " onSubmit={handleSubmit}>
            <div className="
                flex flex-col
                gap-2
            ">
                <label htmlFor="usoEnergia" className="block font-bold">Consumo de energia mensal (em KWh):</label>
                <input type="number" id="usoEnergia" className="w-1/4 rounded-lg m-1 p-1 text-black"
                value={usoEnergia} onChange={(e) => setUsoEnergia(e.target.value)} required              
                />
            </div>
            <div className="
                flex flex-col
                gap-2
            ">
                <label htmlFor="energiaRenovavel" className="block font-bold">Percentual de energia renovável (%):</label>
                <input type="number" id="energiaRenovavel" className="w-1/4 rounded-lg m-1 p-1 text-black"
                value={energiaRenovavel} onChange={(e) => setEnergiaRenovavel(e.target.value)} required
                />
            </div>
            <button type="submit" className="
                bg-lime-600 
                text-white 
                px-4 py-2 
                rounded 
                hover:bg-lime-500 
                w-2/4 
                self-center
                hover:opacity-85
            ">Calcular</button>
            {carbonRedu !== null && (
                <div>
                    <p>
                        Sua redução estimada de emissões de carbono é de{" "}
                        <span className="text-green-600">{carbonRedu.toFixed(2)} kg</span>
                        de CO₂ por mês!
                    </p>

                    <div className="flex items-center gap-2">
                        <button className="
                            bg-red-700
                            text-white 
                            px-4 py-2 
                            rounded-lg 
                            hover:bg-red-600
                            w-1/4 
                            self-center
                            hover:opacity-85
                        " onClick={clear}>
                            Limpar Resultado
                        </button>
                        <button className="
                            bg-blue-700
                            text-white 
                            px-4 py-2 
                            rounded-lg
                            hover:bg-blue-600
                            w-1/4 
                            self-center
                            hover:opacity-85
                        " onClick={saveResult}>
                            Salvar Resultado
                        </button>
                    </div>
                </div>
            )}
            {resultadosSalvos.length > 0 && (
                <div>
                    <h2>Resutados Salvos:</h2>
                    <ul>
                        {resultadosSalvos.map((resultado) => (
                            <li key={resultado.id} className="text-white font-light">
                                <strong className="text-corPrincipal">{resultado.value} kg</strong> de CO₂ em {resultado.data}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    )
}

export default FormCalculadora
