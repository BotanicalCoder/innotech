import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  getTeams(){
    return teams;
  }
   team
getTeam(id:number){
   this.team = teams.filter((team)=>{ return team.teamId===id})
   return this.team
}
  constructor(private route: ActivatedRoute) { }
}

 const teams = [{
   teamId:1,
  Name: 'Team silver',
  members: ['Femi', 'Feranmi', 'Ola', 'Emeka'],
  Category: 'Health-care',
  leader: 'Chi',
  },
  { teamId:2,
      Name: 'Team platinum',
       members: ['Mike', 'Silvia', 'Bobo','IK'],
      Category: 'Agriculture',
       leader: 'Jones',
  },
  { teamId:3,
      Name: 'Team diamond',
       members: ['Miya', 'Soken', 'Rena', 'Bola'],
      Category: 'Power',
       leader:'Gina',},
  {
    teamId:4,
      Name: 'Team precious',
      members: ['Maya', 'Jake', 'Remi', 'Biola'],
      Category: 'Information Technology',
      leader:'Gaius',
  }
  ]
