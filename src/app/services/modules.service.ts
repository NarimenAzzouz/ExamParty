import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from '../Model/module';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  private apiUrl="http://localhost:3000/module"
  private moduleCountSubject = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) {
  }

  addModule(module: Module): Observable<Module> {
    return this.http.post<Module>(this.apiUrl , module);
  }

  getModuleByName(moduleName: string): Observable<Module> {
    const url = `${this.apiUrl}?nom=${moduleName}`;
    return this.http.get<Module>(url);
  }

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.apiUrl);
  }


  getModuleCount(): Observable<number> {
    return this.moduleCountSubject.asObservable();
  }

  setModuleCount(count: number): void {
    this.moduleCountSubject.next(count);
  }
}
