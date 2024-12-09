import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdministrativeCenter } from 'src/app/core/interfaces/IAdministrativeCenter';
import { environment } from 'src/environments/environment';

/**
 * Service class for managing operations related to administrative centers.
 * 
 * This service provides methods to interact with the backend for fetching
 * and managing administrative center data. It is available application-wide due to
 * its root-level provider configuration.
 */
@Injectable({
  providedIn: 'root'
})
export class AdministrativeCenterService {

  private url = `${environment.route}centros-administrativos`;

  /**
   * Constructor to inject the HttpClient dependency for making HTTP requests.
   * 
   * @param http - An Angular service to handle HTTP communications.
   */
  constructor(private http: HttpClient) { }

  /**
   * Fetches a paginated list of administrative centers from the API.
   * 
   * This method sends a GET request to the backend API with pagination parameters
   * and custom headers to retrieve data for administrative centers.
   * 
   * @param pageSize - Number of administrative centers to retrieve per page.
   * @param pageNumber - Page number to fetch.
   * @returns An Observable emitting an array of `IAdministrativeCenter` objects.
   */
  getAll(pageSize: number, pageNumber: number): Observable<IAdministrativeCenter[]> {
    const headers = {
      'message-uuid': '<uuid>',
      'request-app-id': '<uuid>',
      'Accept': 'application/json'
    };
    const params = {
      pageSize: pageSize.toString(),
      pageNumber: pageNumber.toString()
    };

    return this.http.get<IAdministrativeCenter[]>(this.url, { headers: headers, params: params });
  }
}
