import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../services/modules.service';
import { Router } from '@angular/router';
import { Module } from '../Model/module';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit{

  module : Module = new Module();
  modules:Module[];
  placesAReserver: number;
  reservationClicked: boolean = false;
  moduleCount: number;
  constructor(private service: ModulesService,private router:Router){}
  ngOnInit(): void {
    this.loadModules();
  }
  

    saveModule(){
      this.service.addModule(this.module).subscribe(data =>{
        console.log(data);
        alert('Module Successfully added');
       },
       error => console.log(error));
       
    
    
    }
    toggleReservationForm(): void {
      this.reservationClicked = !this.reservationClicked;
    }
    
    onSubmit(){
      console.log(this.module);
      this.saveModule();
    
    }

    private loadModules(): void {
      this.service.getModules().subscribe(
        (data: Module[]) => {
          this.modules = data;
          console.log(this.modules); 
        },
        error => console.log(error)
      );
    }

    onCalculateModuleCount(count: number): void {
      this.moduleCount = count;
    }

    

    

  }


