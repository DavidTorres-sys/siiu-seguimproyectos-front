import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IState } from 'src/app/core/interfaces/IState';
import { environment } from 'src/environments/environment';

/**
 * Service class for managing operations related to states.
 * 
 * This service provides methods to interact with the backend for fetching
 * and managing state-related data. It is available application-wide due to
 * its root-level provider configuration.
 */
@Injectable({
  providedIn: 'root'
})
export class StateService {

  private url = `${environment.route}estados`;

  /**
   * Constructor to inject the HttpClient dependency for making HTTP requests.
   * 
   * @param http - An Angular service to handle HTTP communications.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves a paginated list of states from the API.
   * 
   * This method performs a GET request to the backend API with pagination parameters
   * and custom headers to fetch state data.
   * 
   * @param pageSize - Number of states to retrieve per page.
   * @param pageNumber - The page number to fetch.
   * @returns An Observable emitting an array of `IState` objects.
   */
  getAll(pageSize: number, pageNumber: number): Observable<IState[]> {
    const headers = {
      'message-uuid': '<uuid>',
      'request-app-id': '<uuid>',
      'Accept': 'application/json'
    };
    const params = {
      pageSize: pageSize.toString(),
      pageNumber: pageNumber.toString()
    };
    return this.http.get<IState[]>(this.url, { headers: headers, params: params });
  }
}
