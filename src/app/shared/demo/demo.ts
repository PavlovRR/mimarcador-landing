import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, DatePipe } from '@angular/common';

interface MatchEvent {
  idEvent: string;
  strEvent: string;
  strLeague: string;
  dateEvent: string;
  strTime: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string | null;
  intAwayScore: string | null;
  strHomeTeamBadge?: string | null;
  strAwayTeamBadge?: string | null;

  // campos calculados a horario de México
  localDate?: string;
  localTime?: string;
}

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './demo.html',
  styleUrl: './demo.scss'
})
export class DemoComponent implements OnInit {

  isLoading = false;
  errorMsg = '';
  matches: MatchEvent[] = [];

  // Liga seleccionada (id de TheSportsDB)
  selectedLeagueId = '4328'; // Premier League por defecto

  // Mapa de ligas para los botones
  leagues = [
    { id: '4328', name: 'Premier League' },
    { id: '4335', name: 'LaLiga' },
    { id: '4331', name: 'Bundesliga' },
    { id: '4350', name: 'Liga MX' },
    { id: '4346', name: 'MLS' }
  ];

  // Configuración de la API de TheSportsDB
  private readonly apiKey = '523114';
  private readonly baseUrl = 'https://www.thesportsdb.com/api/v1/json';

  ngOnInit(): void {
    this.loadMatches();
  }

  async loadMatches(): Promise<void> {
    this.isLoading = true;
    this.errorMsg = '';
    this.matches = [];

    const url = `${this.baseUrl}/${this.apiKey}/eventsnextleague.php?id=${this.selectedLeagueId}`;
    console.log('Llamando a:', url);

    try {
      const response = await fetch(url);
      console.log('HTTP status:', response.status);

      const rawText = await response.text();
      console.log('Respuesta cruda de la API:', rawText);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = JSON.parse(rawText);
      const rawEvents = (data?.events ?? []) as any[];

      // Convertimos cada evento a horario de México
      this.matches = rawEvents.map((e: any) => {
        const event: MatchEvent = e;
        const { date, time } = this.toMexicoDateTime(e.dateEvent, e.strTime);
        event.localDate = date;
        event.localTime = time;
        return event;
      });

      if (!this.matches.length) {
        this.errorMsg = 'No hay partidos próximos para esta liga.';
      }
    } catch (err: any) {
      console.error('Error al obtener datos de TheSportsDB', err);
      this.errorMsg = `Ocurrió un error al cargar los partidos. ${err?.message ?? ''}`;
    } finally {
      this.isLoading = false;
    }
  }

  changeLeague(leagueId: string): void {
    this.selectedLeagueId = leagueId;
    this.loadMatches();
  }

  // Convierte dateEvent + strTime a horario de Ciudad de México
  private toMexicoDateTime(dateStr: string, timeStr: string): { date: string; time: string } {
    if (!dateStr) {
      return { date: '', time: '' };
    }

    // Si no hay hora, asumimos 00:00:00
    const safeTime = timeStr || '00:00:00';

    // Construimos fecha/hora asumiendo que la API está en UTC
    const iso = `${dateStr}T${safeTime}Z`;
    const utcDate = new Date(iso);

    const dateFormatter = new Intl.DateTimeFormat('es-MX', {
      timeZone: 'America/Mexico_City',
      day: '2-digit',
      month: '2-digit'
    });

    const timeFormatter = new Intl.DateTimeFormat('es-MX', {
      timeZone: 'America/Mexico_City',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    const date = dateFormatter.format(utcDate); // ej. 13/12
    const time = timeFormatter.format(utcDate); // ej. 20:00

    return { date, time };
  }
}




