import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILevel } from 'src/app/core/interfaces/ILevel';
import { environment } from 'src/environments/environment';

/**
 * Service class for managing operations related to levels.
 * 
 * This service provides methods to interact with the backend for fetching
 * and managing level-related data. It is available application-wide due to
 * its root-level provider configuration.
 */
@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private url = `${environment.route}niveles`;

  /**
   * Constructor to inject the HttpClient dependency for making HTTP requests.
   * 
   * @param http - An Angular service to handle HTTP communications.
   */
  constructor(private http: HttpClient) { }

  /**
   * Fetches a paginated list of levels from the API.
   * 
   * This method sends a GET request to the backend API with pagination parameters
   * and custom headers to retrieve level data.
   * 
   * @param pageSize - Number of levels to retrieve per page.
   * @param pageNumber - Page number to fetch.
   * @returns An Observable emitting an array of `ILevel` objects.
   */
  getAll(pageSize: number, pageNumber: number): Observable<any> {
    const headers = {
      'message-uuid': '<uuid>',
      'request-app-id': '<uuid>',
      'Accept': 'application/json'
    };
    const params = {
      pageSize: pageSize.toString(),
      pageNumber: pageNumber.toString()
    };
    return this.http.get(this.url, { headers: headers, params: params });
  }
}
