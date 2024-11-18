const CardEnergia = ({nome, imagem, descricao, lista, link}) => {
    return(
        <div className="
            w-4/5 h-60
            flex justify-center
            text-white
            gap-2
            shadow-lg
            bg-gray-900
        ">
            <img src={imagem} alt="Imagem da energia" className="
                object-cover
                w-40 h-auto
            "/>
            <div className="p-2">
                <h3 className="
                    text-2xl
                    mb-2
                    font-bold
                ">{nome}</h3>
                <p className="
                    w-2/4
                    text-xs
                    mb-1
                ">{descricao}</p>
                <p className="
                    text-xs
                    font-bold
                ">Principais Vantagens: </p>
                <ul className="
                    ml-5 
                    list-disc 
                    text-xs
                ">
                    <li>{lista[0]}</li>
                    <li>{lista[1]}</li>
                    <li>{lista[2]}</li>
                </ul>
                <button className="
                    float-right
                    mr-4
                    relative
                    text-corPrincipal
                ">
                    <a href={link} target="_blank">Saiba Mais</a>
                </button>
            </div>
        </div>
    )
}

export default CardEnergia
