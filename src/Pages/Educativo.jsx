import CardEnergia from "../Componentes/CardEnergia"

export default function Educativo() {
    return(
        <section className="
            p-2 py-5 
            container mx-auto
            grid
            h-fit
            z-20
            grid-cols-1
            place-items-center
            gap-10
        ">
            <CardEnergia 
                nome="Energia Solar"
                imagem="/energia-solar.jpg"
                descricao="A energia solar é obtida através da conversão da luz do sol em eletricidade. É uma das formas mais limpas e abundantes de energia renovável, ajudando a reduzir as emissões de carbono e a combater o aquecimento global."
                lista={["Reduz a dependência de combustíveis fósseis.", "Baixo custo de manutenção após a instalação.", "Ampla disponibilidade em regiões ensolaradas."]}
                link="https://brasilescola.uol.com.br/geografia/energia-solar.htm"
            />

            <CardEnergia 
                nome="Energia Eólica"
                imagem="/energia-eolica.jpg"
                descricao="A energia eólica é gerada através da força dos ventos, utilizando turbinas que convertem a energia cinética em eletricidade. É uma fonte renovável que não emite gases de efeito estufa durante sua operação."
                lista={["Não produz emissões durante a geração.", "Pode ser combinada com outras atividades rurais.", "Tecnologia em constante evolução e barateamento."]}
                link="https://brasilescola.uol.com.br/fisica/energia-eolica.htm"
            />

            <CardEnergia 
                nome="Energia Hidrelétrica"
                imagem="/energia-hidrica.jpeg"
                descricao="A energia hidrelétrica é gerada pelo aproveitamento do fluxo das águas em usinas hidroelétricas. Embora cause impactos ambientais na sua construção, é uma fonte renovável e limpa na operação."
                lista={["Alta eficiência energética.", "Longa vida útil das instalações.", "Capacidade de armazenamento de energia."]}
                link="https://brasilescola.uol.com.br/geografia/energia-hidreletrica.htm"
            />

            <CardEnergia 
                nome="Biomassa"
                imagem="/energia-biomassa.jpg"
                descricao="A biomassa utiliza matéria orgânica para produção de energia, como resíduos agrícolas, florestais e urbanos. É considerada renovável pois o ciclo de produção pode ser relativamente curto."
                lista={["Aproveitamento de resíduos.", "Geração descentralizada.", "Redução de resíduos em aterros."]}
                link="https://www.portal-energia.com/biomassa/"
            />

            <CardEnergia 
                nome="Energia Geotérmica"
                imagem="/energia-geotermica.jpg"
                descricao="A energia geotérmica aproveita o calor natural do interior da Terra para gerar eletricidade e aquecimento. É uma fonte constante e confiável de energia renovável, independente de condições climáticas."
                lista={["Fornecimento constante de energia.", "Ocupação mínima de terreno.", "Baixa emissão de gases."]}
                link="https://www.nationalgeographic.com/environment/article/geothermal-energy"
            />

            <CardEnergia 
                nome="Energia das Marés"
                imagem="/energia-mares.jpg"
                descricao="A energia das marés ou maremotriz aproveita a diferença de altura entre as marés alta e baixa para gerar eletricidade. É uma fonte previsível e constante de energia renovável com grande potencial em áreas costeiras."
                lista={["Altamente previsível.", "Grande potencial energético.", "Vida útil longa das instalações."]}
                link="https://www.pensamentoverde.com.br/economia-verde/energia-maremotriz-energia-das-mares/"
            />
        </section>
    )
}