import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Module } from '../Model/module';
import { ModulesService } from '../services/modules.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-modules',
  templateUrl: './details-modules.component.html',
  styleUrls: ['./details-modules.component.css']
})
export class DetailsModulesComponent implements OnInit {

  @Input() modules: Module[];
  @Output() calculateModuleCountEvent = new EventEmitter<number>();
  constructor(private service: ModulesService,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  calculateModuleCount(): void {
    const moduleCount = this.modules ? this.modules.length : 0;
    this.calculateModuleCountEvent.emit(moduleCount);
  }

}
