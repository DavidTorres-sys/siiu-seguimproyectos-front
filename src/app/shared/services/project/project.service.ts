import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/core/interfaces/IProject';
import { environment } from 'src/environments/environment';

/**
 * Service class to manage project-related API operations.
 * 
 * This service provides methods to interact with the backend for fetching
 * and managing project data. It is provided at the root level of the Angular
 * application, making it accessible across all components and modules.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = `${environment.route}proyecto{codigo}`;

  /**
   * Constructor to inject the HttpClient dependency for performing HTTP requests.
   * 
   * @param http - An Angular service to make HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves a paginated list of projects from the API.
   * 
   * This method makes a GET request to the API with pagination parameters and custom headers.
   * 
   * @param pageSize - The number of projects to retrieve per page.
   * @param pageNumber - The page number to fetch.
   * @returns An Observable that emits an array of `IProject` objects.
   * 
   */
  getAll(pageSize: number, pageNumber: number): Observable<IProject[]> {
    const headers = {
      'message-uuid': '<uuid>',
      'request-app-id': '<uuid>',
      'Accept': 'application/json'
    };
    const params = {
      pageSize: pageSize.toString(),
      pageNumber: pageNumber.toString()
    };
    return this.http.get<IProject[]>(this.url, { headers: headers, params: params });
  }
}
