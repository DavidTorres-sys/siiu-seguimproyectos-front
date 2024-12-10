import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IType } from 'src/app/core/interfaces/IType';

/**
 * Service class for managing operations related to types.
 * 
 * This service provides methods to interact with the backend for fetching
 * and managing type-related data. It is provided at the root level of the Angular
 * application, making it accessible across all components and modules.
 */
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private url = `${environment.route}tipos`;

  /**
   * Constructor to inject the HttpClient dependency for performing HTTP requests.
   * 
   * @param http - An Angular service to make HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves a paginated list of types from the API.
   * 
   * This method makes a GET request to the API with pagination parameters and custom headers.
   * 
   * @param pageSize - The number of types to retrieve per page.
   * @param pageNumber - The page number to fetch.
   * @returns An Observable that emits an array of `IType` objects.
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
