import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Play, MusicIcon, Globe, Mail, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="wave-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Garota de Ipanema</h1>
              <p className="text-xl md:text-2xl mb-6">Um dos maiores clássicos da música brasileira, que conquistou o mundo.</p>
              <div className="flex space-x-4">
                <Button asChild className="bg-white text-bossanova-300 hover:bg-gray-100">
                  <Link to="/historia">Conheça a História</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="https://www.youtube.com/watch?v=c5QfXjsoNe4" target="_blank" rel="noopener noreferrer">
                    Ouvir Agora
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                alt="Praia de Ipanema no Rio de Janeiro" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que torna essa música tão especial?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Melodia Inconfundível</CardTitle>
                <CardDescription>Uma composição que ficou eternizada na história da música.</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" 
                  alt="Partitura Musical" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p>Com acordes marcantes e uma melodia que é facilmente reconhecível, Garota de Ipanema é um dos maiores sucessos da bossa nova.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Reconhecimento Mundial</CardTitle>
                <CardDescription>A música brasileira que conquistou o mundo.</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1524721696987-b9527df9e512" 
                  alt="Grammy Awards" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p>Em 1964, a versão em inglês "The Girl from Ipanema" ganhou o Grammy de Gravação do Ano, levando a bossa nova para o mundo.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Inspiração Real</CardTitle>
                <CardDescription>Uma musa real que inspirou gerações.</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a" 
                  alt="Praia de Ipanema" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p>A música foi inspirada em Heloísa Pinheiro, que passava todos os dias em frente ao bar onde Tom Jobim e Vinícius de Moraes compunham.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-bossanova-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="mb-6">
                Tem alguma dúvida, sugestão ou quer compartilhar sua experiência com a música? 
                Adoraríamos receber seu contato!
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-5 w-5 text-bossanova-300" />
                <span>contato@garotadeipanema.com.br</span>
              </div>
              <Button asChild className="mt-4 bg-bossanova-300 hover:bg-bossanova-400">
                <Link to="/contato" className="flex items-center">
                  Enviar Mensagem <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>Descubra Mais Versões</CardTitle>
                  <CardDescription>Conheça as diversas interpretações deste clássico da música brasileira</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    De Tom Jobim a Frank Sinatra, de João Gilberto a Amy Winehouse, 
                    "Garota de Ipanema" foi regravada por artistas de diferentes épocas e estilos.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/versoes">
                      Explorar Versões Famosas
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
