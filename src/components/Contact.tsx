import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your gaming vision to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for collaboration, have a project in mind, or just want to chat about games, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Mail className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hawk.meineke@gamedev.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <MessageSquare className="text-accent mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Discord</p>
                    <p className="text-sm text-muted-foreground">HawkDev#2024</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center">
                  <Mail className="mr-2" size={16} />
                  Send Email
                </Button>
                
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                    <Github size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                    <Linkedin size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;