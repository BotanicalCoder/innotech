import { Component, OnInit, OnChanges } from '@angular/core';
import {DataserviceService} from '../dataservice.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private dataservice:DataserviceService) { }
  teamName:string
  teams:any[]
  ngOnInit(): any {
  
  this.teamName= 'Team silver';
 this.teams = this.dataservice.getTeams();
  
  }
  
 ngOnChanges(){
 
 }

 filterTeams(){
  
  if (this.teamName ) {
    this.teams = this.dataservice.getTeams().filter((team)=>{
      return this.teamName === team.Name})
    return this.teams
    } else {
      this.teams = this.dataservice.getTeams();
      return this.teams
    }
}
}
