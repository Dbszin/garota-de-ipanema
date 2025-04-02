
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, MusicIcon, Globe, Headphones } from 'lucide-react';

const Versoes = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Versões Famosas</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Conheça as interpretações mais icônicas de Garota de Ipanema, uma das músicas mais regravadas da história.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Interpretações Clássicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center">
                <MusicIcon className="text-bossanova-300 mr-3" />
                <CardTitle>Tom Jobim & Vinícius de Moraes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">A versão original em português, lançada em 1962, que iniciou o fenômeno mundial. A primeira gravação com arranjos de Tom Jobim.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.youtube.com/watch?v=c5QfXjsoNe4" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1" size={16} />
                  Ouvir Original
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center">
                <Globe className="text-bossanova-300 mr-3" />
                <CardTitle>Stan Getz & Astrud Gilberto</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">A versão em inglês "The Girl from Ipanema" que venceu o Grammy em 1964 e conquistou as paradas internacionais.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.youtube.com/watch?v=sVdaFQhS86E" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1" size={16} />
                  Ouvir em Inglês
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center">
                <MusicIcon className="text-bossanova-300 mr-3" />
                <CardTitle>Frank Sinatra & Antônio Carlos Jobim</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">Frank Sinatra gravou sua versão com Tom Jobim em 1967 no álbum "Francis Albert Sinatra & Antonio Carlos Jobim".</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.youtube.com/watch?v=NldPFVKYmiw" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1" size={16} />
                  Sinatra & Jobim
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Versões Contemporâneas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center">
                <Headphones className="text-bossanova-300 mr-3" />
                <CardTitle>Amy Winehouse</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">Uma versão mais moderna com a inconfundível voz de Amy Winehouse, misturando jazz contemporâneo e bossa nova.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.youtube.com/watch?v=4XKGfziuw5c" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1" size={16} />
                  Ouvir Amy Winehouse
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center">
                <MusicIcon className="text-bossanova-300 mr-3" />
                <CardTitle>Diana Krall</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">A pianista e cantora de jazz Diana Krall apresenta uma interpretação elegante e sofisticada do clássico.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.youtube.com/watch?v=JIGxtuaBf2k" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1" size={16} />
                  Ouvir Diana Krall
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center">
                <Globe className="text-bossanova-300 mr-3" />
                <CardTitle>Bebel Gilberto</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6">Filha de João Gilberto, Bebel traz uma versão moderna e eletrônica que reinterpreta o clássico para o século 21.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.youtube.com/watch?v=6patYIrfRIM" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1" size={16} />
                  Ouvir Bebel Gilberto
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-bossanova-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Curiosidade</h2>
        <p className="text-center text-lg">
          "Garota de Ipanema" é a segunda música mais regravada da história, ficando atrás apenas de "Yesterday" dos Beatles, 
          com mais de 1.000 versões gravadas em diferentes idiomas e estilos musicais.
        </p>
      </section>
    </div>
  );
};

export default Versoes;
