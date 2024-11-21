const CardEnergia = ({nome, imagem, descricao, lista, link}) => {
    return(
        <div className="
            w-full h-auto
            md:w-4/5 
            md:h-60
            flex flex-col
            justify-center
            md:flex-row
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
                    text-base
                    md:text-2xl
                    mb-2
                    font-bold
                ">{nome}</h3>
                <p className="
                    w-2/4
                    md:text-xs
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
