import { Injectable ,isDevMode} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  url = 'http://localhost:5000'
  constructor(private http: HttpClient) 
  {
    if(!isDevMode()) 
    {
      this.url = '';
    }
  }
  getProducts() 
  {
    return this.http.get(this.url + '/product');
  }

 getPurchases() 
  {
    return this.http.get(this.url + '/purchase');
  }

}
