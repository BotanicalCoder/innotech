import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
    selector: 'app-team-detail',
    template: ` <div class='card' *ngFor='let team of team' >
                <h2 class='teamName'>{{team.Name}}</h2>
                <h4> Team leader </h4>
                <p> {{team.leader}}</p>
                <h4> Team members</h4>
                <p *ngFor='let member of team.members'>{{ member}} </p>
                <h4> Team category</h4>
                <p> {{team.Category}}</p>
                <h4> project description</h4>
                <p> about project </p>
                </div>`,
    styles: [`
             div.card{ margin: 5em;}
            `],

  })

  export class TeamDetailComponent implements OnInit { 
    team
    constructor(private route:ActivatedRoute, private dataService: DataserviceService){}

     
      ngOnInit(){
         let id = +this.route.snapshot.paramMap.get('id');
         let Team= this.dataService.getTeam(id);
         this.team = [...Team]
        

      }
  }