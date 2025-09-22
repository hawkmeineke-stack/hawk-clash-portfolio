import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Code, Users } from "lucide-react";
import royalClashImage from "@/assets/royal-clash-arena.jpg";

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into my latest creation - a strategic masterpiece that combines tactical gameplay with stunning visuals
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
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
                    An epic medieval strategy game that combines tactical combat with resource management. 
                    Players command mighty armies, build formidable castles, and engage in intense PvP battles 
                    across beautifully crafted fantasy realms.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Unity 3D</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">Photon Networking</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Blender</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <Users className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-sm text-muted-foreground">Players</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <Play className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-2xl font-bold text-foreground">4.8</p>
                    <p className="text-sm text-muted-foreground">Rating</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <Code className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-2xl font-bold text-foreground">2 Years</p>
                    <p className="text-sm text-muted-foreground">Development</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1">
                    <Play className="mr-2" size={16} />
                    Play Now
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    <ExternalLink className="mr-2" size={16} />
                    Learn More
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