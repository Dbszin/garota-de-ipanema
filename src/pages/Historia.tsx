
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Historia = () => {
  return (
    <article className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">A História de Garota de Ipanema</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Como uma simples visão de uma jovem passando pela praia se transformou em uma das músicas mais executadas do mundo.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">A Composição</h2>
              <p className="mb-4">
                Em 1962, Tom Jobim e Vinícius de Moraes estavam frequentando o bar Veloso (hoje Garota de Ipanema), 
                no Rio de Janeiro, quando se encantaram com uma jovem que passava diariamente a caminho da praia.
              </p>
              <p>
                Essa jovem era Heloísa Eneida Menezes Paes Pinto (agora conhecida como Heloísa Pinheiro), 
                que se tornaria eternizada como "a garota de Ipanema", musa inspiradora de uma das canções 
                mais famosas do mundo.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517285076541-10535151d6e1" 
                alt="Bar Garota de Ipanema" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">O Sucesso Mundial</h2>
              <p className="mb-4">
                Inicialmente gravada por Pery Ribeiro em 1962, a música ganhou projeção internacional 
                quando foi regravada em inglês por Astrud Gilberto, João Gilberto e Stan Getz em 1964, 
                com o título "The Girl from Ipanema".
              </p>
              <p>
                A versão em inglês ganhou o Grammy de Disco do Ano em 1965, tornando-se um hit nas paradas 
                americanas e abrindo portas para a bossa nova no mercado internacional.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3" 
                alt="Disco de vinil" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">A Herança Cultural</h2>
              <p className="mb-4">
                "Garota de Ipanema" é hoje a segunda música mais regravada de todos os tempos, ficando atrás 
                apenas de "Yesterday" dos Beatles. Foi regravada por artistas como Frank Sinatra, Ella Fitzgerald, 
                Amy Winehouse e muitos outros.
              </p>
              <p>
                Em 1999, foi eleita pela National Public Radio (NPR) americana como uma das 100 músicas mais 
                importantes do século XX. A canção é considerada um símbolo da cultura brasileira e da bossa nova 
                ao redor do mundo.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1579947080266-df2e7e8c5f00" 
                alt="Praia de Ipanema no Rio de Janeiro" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <blockquote className="border-l-4 border-bossanova-300 pl-6 my-12 italic">
          <p className="text-xl mb-2">
            "Olha que coisa mais linda, mais cheia de graça. É ela menina que vem e que passa, num doce balanço a caminho do mar..."
          </p>
          <cite className="text-muted-foreground">— Tom Jobim e Vinícius de Moraes</cite>
        </blockquote>

        <section>
          <h2 className="text-2xl font-bold mb-4">Legado</h2>
          <p className="mb-4">
            Hoje, "Garota de Ipanema" é muito mais que apenas uma canção. É um marco cultural, um símbolo da música 
            brasileira e um patrimônio da bossa nova. O bairro de Ipanema, a praia e o bar onde tudo começou são 
            pontos turísticos frequentemente visitados por admiradores da música de todo o mundo.
          </p>
          <p>
            A canção que nasceu de uma simples observação do cotidiano carioca se tornou um dos maiores 
            embaixadores da cultura brasileira no exterior, mostrando ao mundo a sofisticação e a beleza 
            da música brasileira.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Historia;
