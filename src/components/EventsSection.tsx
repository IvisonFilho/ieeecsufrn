import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    id: 1,
    title: "Workshop de Inovação",
    speaker: "Ana",
    date: "2024-02-09",
    time: "8:00 am",
    location: "Auditório",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Palestra sobre IA",
    speaker: "Carlos",
    date: "2024-02-09", 
    time: "9:00 am",
    location: "Sala 202",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Mesa Redonda",
    speaker: "Fernanda",
    date: "2024-02-10",
    time: "10:00 am",
    location: "Auditório",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Networking Tech",
    speaker: "Roberto",
    date: "2024-02-11",
    time: "14:00 pm",
    location: "Sala de Eventos",
    attendees: 80,
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=200&fit=crop"
  }
];

const dateFilters = [
  { label: "Sex 09 Fev", value: "2024-02-09" },
  { label: "Sáb 10 Fev", value: "2024-02-10" },
  { label: "Dom 11 Fev", value: "2024-02-11" }
];

const EventsSection = () => {
  const [selectedDate, setSelectedDate] = useState<string>("all");
  const { toast } = useToast();

  const filteredEvents = selectedDate === "all" 
    ? events 
    : events.filter(event => event.date === selectedDate);

  const handleEventAction = (action: string, eventTitle: string) => {
    toast({
      title: `${action} realizada`,
      description: `${action === "Detalhes" ? "Abrindo detalhes" : "Inscrição realizada"} para: ${eventTitle}`,
    });
  };

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium uppercase tracking-wide text-primary">Eventos</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Calendário</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira nossos eventos passados e futuros, e participe das nossas atividades enriquecedoras.
          </p>
        </div>

        {/* Date Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedDate === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDate("all")}
            className="rounded-full"
          >
            Todos
          </Button>
          {dateFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={selectedDate === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDate(filter.value)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-ieee transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center md:items-start p-6">
                {/* Time */}
                <div className="md:w-20 text-center md:text-left mb-4 md:mb-0 md:mr-6">
                  <div className="text-lg font-semibold text-foreground">
                    {event.time}
                  </div>
                </div>

                {/* Event Image */}
                <div className="w-24 h-24 md:w-20 md:h-20 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{event.speaker}</p>
                  <div className="flex items-center justify-center md:justify-start text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 md:mt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mr-2"
                      >
                        Ver detalhes
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{event.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.attendees} participantes</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Palestrante</h4>
                          <p className="text-muted-foreground">{event.speaker}</p>
                        </div>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            toast({
                              title: "Inscrição realizada",
                              description: `Você se inscreveu para: ${event.title}`,
                            });
                          }}
                        >
                          Inscrever-se
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum evento encontrado para a data selecionada.</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              toast({
                title: "Calendário Completo",
                description: "Redirecionando para o calendário completo de eventos...",
              });
              // Aqui você pode adicionar a navegação para uma página de eventos completa
            }}
          >
            Ver Todos os Eventos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;