import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportsApiService {
  private baseUrl = environment.apiBaseUrl;
  private apiKey  = environment.apiKey;

  constructor(private http: HttpClient) {}

  /**
   * Próximos partidos por liga.
   * Usa el endpoint: eventsnextleague.php?id={idLeague}
   * Docs: https://www.thesportsdb.com/api/v1/json/{APIKEY}/eventsnextleague.php?id=4328
   */
  getNextMatchesByLeague(leagueId: string): Observable<any> {
    const url = `${this.baseUrl}/${this.apiKey}/eventsnextleague.php?id=${leagueId}`;
    return this.http.get<any>(url);
  }
}

