import { Card, CardContent } from "@/components/ui/card";

const About = () => {

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am an energetic student ready to make fun games for people to enjoy
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-foreground/90">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a dedicated game developer with over 5 years of experience crafting engaging 
                  interactive experiences. My journey began with a simple love for games and evolved 
                  into a professional pursuit of excellence in game development.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  My approach combines cutting-edge technology with timeless game design principles. 
                  I believe that great games are born from the perfect balance of innovation, 
                  accessibility, and pure fun.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding or designing, you can find me exploring the latest gaming trends, 
                  contributing to open-source projects, or mentoring aspiring game developers in the community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;