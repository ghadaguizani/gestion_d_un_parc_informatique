import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { intervention } from '../model/intervention.model';
@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  constructor(private httpClient:HttpClient) { }
  
}
