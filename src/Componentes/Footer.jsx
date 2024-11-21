const Footer = () => {
    return(
        <footer className="
            border-y-2 border-slate-900
            p-4 
            h-20 w-full
            static bottom-0
            z-0
            hidden
            md:block
        ">
            <div className="
                container mx-auto
                text-center
                flex flex-col 
                gap-2
                text-white text-xs
            ">
                <p className="opacity-50 font-extralight">&copy; 2024 Calculadora de Impacto Ambiental. Todos os direitos reservados.</p>
                <p className="opacity-50 font-extralight">Desenvolvido com React e Tailwind CSS.</p>
            </div>
        </footer>
    )
}

export default Footer
