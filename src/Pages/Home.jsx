import ButtonForm from "../Componentes/ButtonForm"

export default function Home() {
    return (
        <>
            <main className="
                container mx-auto my-2
                w-4/5 
                flex justify-around items-center
                bg-image-hero
                bg-center
                bg-cover
                bg-no-repeat
                h-screen
                p-10
                rounded-2xl
                brightness-100
            ">
                <div className="
                    text-white
                    text-center
                ">
                    <h1 className="
                        text-2xl
                        font-extrabold
                    ">
                        Descubra o impacto ambiental de suas escolhas energéticas
                    </h1>
                    <p className="
                        text-sm
                        font-semibold
                    ">
                        Insira seus dados e veja como as energias limpas podem ajudar a reduzir emissões de carbono.
                    </p>
                    <ButtonForm legenda="Comece Agora" />
                </div>
            </main>
        </>
        
    )
}