import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import royalClashImage from "@/assets/royal-clash-arena.png";
import snakeGameImage from "@/assets/snake-game.png";

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out my game projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Royal Clash Arena */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={royalClashImage} 
                  alt="Royal Clash Arena - Medieval fantasy strategy game"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:from-transparent md:to-background/80"></div>
              </div>
              
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Royal Clash Arena
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A fun game inspired by Supercell's Clash Royale
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open('https://royal-rampage-clone.lovable.app/', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Play Game
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Snake */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={snakeGameImage} 
                  alt="Snake game - Classic arcade game"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:from-transparent md:to-background/80"></div>
              </div>
              
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Snake
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A classic snake game
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open('https://slither-studio-game.lovable.app', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Play Game
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;