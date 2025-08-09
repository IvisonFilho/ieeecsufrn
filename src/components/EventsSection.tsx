import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    id: 1,
    title: "I Reunião Cogestão do Ramo Estudantil IEEE UFRN 2025",
    speaker: "N/A",
    date: "2025-01-11",
    time: "09:00 am",
    location: "UFRN",
    attendees: 30,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "II Reunião Cogestão do Ramo Estudantil IEEE UFRN 2025",
    speaker: "N/A",
    date: "2025-01-18",
    time: "09:00 am",
    location: "UFRN",
    attendees: 35,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "1ª Reunião Geral do IEEE CS UFRN de 2025",
    speaker: "N/A",
    date: "2025-01-21",
    time: "10:00 am",
    location: "Auditório Central",
    attendees: 50,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "2ª Reunião Geral do IEEE CS UFRN de 2025",
    speaker: "N/A",
    date: "2025-02-27",
    time: "10:00 am",
    location: "Auditório Central",
    attendees: 50,
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=200&fit=crop"
  },
  {
    id: 5,
    title: "3ª Reunião Geral do IEEE CS UFRN de 2025",
    speaker: "N/A",
    date: "2025-03-28",
    time: "10:00 am",
    location: "Auditório Central",
    attendees: 55,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop"
  },
  {
    id: 6,
    title: "IEEE CS GAC - Area 4 Meeting",
    speaker: "N/A",
    date: "2025-04-05",
    time: "09:00 am",
    location: "Sala 101",
    attendees: 40,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 7,
    title: "Coffee Tech 2025 - Introdução Realidade Estendida",
    speaker: "N/A",
    date: "2025-04-23",
    time: "14:00 pm",
    location: "Laboratório XR",
    attendees: 60,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=200&fit=crop"
  },
  {
    id: 8,
    title: "4ª Reunião do IEEE CS UFRN de 2025",
    speaker: "N/A",
    date: "2025-04-30",
    time: "10:00 am",
    location: "Auditório Principal",
    attendees: 70,
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=200&fit=crop"
  },
  {
    id: 9,
    title: "5ª Reunião do IEEE CS UFRN de 2025",
    speaker: "N/A",
    date: "2025-05-23",
    time: "10:00 am",
    location: "Auditório Principal",
    attendees: 75,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop"
  },
  {
    id: 10,
    title: "IV Reunião das Diretorias Ramo IEEE UFRN",
    speaker: "N/A",
    date: "2025-05-23",
    time: "09:00 am",
    location: "Sala de Reuniões",
    attendees: 25,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 11,
    title: "Coffee Tech 2025 - Teste de Software em Micro-Empresas",
    speaker: "N/A",
    date: "2025-05-29",
    time: "14:00 pm",
    location: "Laboratório de Software",
    attendees: 40,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=200&fit=crop"
  },
  {
    id: 12,
    title: "6ª Reunião do IEEE CS UFRN de 2025",
    speaker: "N/A",
    date: "2025-06-16",
    time: "10:00 am",
    location: "Auditório Principal",
    attendees: 80,
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=200&fit=crop"
  }
];

const dateFilters = [
  { label: "Jan 11", value: "2025-01-11" },
  { label: "Jan 18", value: "2025-01-18" },
  { label: "Jan 21", value: "2025-01-21" },
  { label: "Feb 27", value: "2025-02-27" },
  { label: "Mar 28", value: "2025-03-28" },
  { label: "Apr 05", value: "2025-04-05" },
  { label: "Apr 23", value: "2025-04-23" },
  { label: "Apr 30", value: "2025-04-30" },
  { label: "May 23", value: "2025-05-23" },
  { label: "May 29", value: "2025-05-29" },
  { label: "Jun 16", value: "2025-06-16" },
  { label: "Todos", value: "all" }
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
            Confira nossos eventos passados.
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
                  {/*<p className="text-muted-foreground mb-2">{event.speaker}</p>*/}
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
                          {/*<div className="flex items-center text-muted-foreground">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.attendees} participantes</span>
                          </div>*/}
                        </div>
                        {/*<div>
                          <h4 className="font-semibold mb-2">Palestrante</h4>
                          <p className="text-muted-foreground">{event.speaker}</p>
                        </div>*/}
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
      </div>
    </section>
  );
};

export default EventsSection;