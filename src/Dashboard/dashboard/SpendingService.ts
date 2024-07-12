import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISpending} from "../../Model/SpendingModel";

@Injectable({
  providedIn : 'root'
})

export class SpendingService{

  constructor(private http: HttpClient) {
  }

  private postUrl = 'http://localhost:8080/api/post-spending'
  private getUrl = 'http://localhost:8080/api/get-spending'



  public postSpending(spending : any) : Observable<any>{
    return this.http.post<any>(this.postUrl,spending);
  }
  public getSpending() : Observable<ISpending[]>{
    return this.http.get<any>(this.getUrl);
  }

}
