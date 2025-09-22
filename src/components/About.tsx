import { Card, CardContent } from "@/components/ui/card";
import { Code, Gamepad2, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Gamepad2 className="text-primary" size={32} />,
      title: "Game Development",
      description: "Unity 3D, Unreal Engine, and custom game engines with focus on performance and player experience"
    },
    {
      icon: <Code className="text-accent" size={32} />,
      title: "Programming",
      description: "C#, C++, JavaScript, and Python with expertise in game architecture and optimization"
    },
    {
      icon: <Palette className="text-primary" size={32} />,
      title: "Game Design",
      description: "Level design, gameplay mechanics, and user experience with emphasis on engagement"
    },
    {
      icon: <Zap className="text-accent" size={32} />,
      title: "Performance",
      description: "Optimization, debugging, and scalable solutions for complex gaming systems"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With a passion for creating immersive digital worlds, I bring together technical expertise 
            and creative vision to build games that captivate and inspire players worldwide.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;