import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const skills = [
    "Teamwork",
    "Communication",
    "Problem-Solving",
    "Web Design"
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Skills
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center text-lg">
                    <CheckCircle2 className="text-primary mr-4 flex-shrink-0" size={24} />
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
