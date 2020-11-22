import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    template: ` <div class='card'>
                <h2 class='teamName'>{{team.Name}}</h2>
                <h4> Team leader </h4>
                <p> {{team.leader}}</p>
                <h4> Team members</h4>
                <p *ngFor='let member of team.members'>{{ member}} </p>
                <h4> Team category</h4>
                <p> {{team.Category}}</p>
                </div>`,
    styles: [`
             div.card{ 
             margin-top:6em; 
             margin-left:2em;
             background-color:#2196f3; 
             padding:0.3em 0em 1em 1em;
             width:15em;
             color:white;
             font-size: large;
            
            }  
            h2.teamName{
                padding:0.5em;
                margin-top:-2em;
               margin-left:-0.7em; 
               margin-right:0em; 
                text-align:center;
               background-color: rgb(219, 216, 216);
               color:black;
            }
            `],

  })

  export class TeamComponent implements OnInit { 
    @Input()  team:any
      ngOnInit(){}
  }