import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";

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

              <div className="flex justify-center mb-8">
                <div className="flex items-center justify-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Mail className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">meinekeprofesional@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center"
                  onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqjKwCSCbCCCQkPvXpxGVhdstqmlGLnQmXKdbzfmtmBfrJXLCtfcpLkNqmTwqjClvvVzKQ', '_blank')}
                >
                  <Mail className="mr-2" size={16} />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/hawkmeineke-stack', '_blank')}
                >
                  <Github size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;