import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  tasks = [
    {
      'id': 1,
     'name': 'Check List',
     'status': 'Notdone'
   },
   {
    'id': 2,
     'name': 'Workpackages',
     'status': 'Inprogress'
   },
   {
    'id': 3,
     'name': 'Crane Plan',
     'status': 'Done'
   },
   {
       'id': 4,
      'name': 'Load Plan',
       'status': 'Done'
   },
   {
       'id': 5,
       'name': 'Discharge Plan',
       'status': 'Done'
   },
   {
    'id': 6,
    'name': 'Activate the work',
    'status': 'Notdone'
  },
  {
    'id': 7,
    'name': 'Finish Admin Taks',
    'status': 'Notdone'
  }
  
  ];
   status={green:'Done',yellow:'Inprogress', grey:'Notdone'}    
    public currenttask:any = {};
    public taskDetails!: FormGroup;
    
    constructor(  private router: Router) { }
  
    ngOnInit(): void {
    }
    sendtask(e: any){
      
      this.currenttask=e;
      let selectedTask={
        'name':this.currenttask.name,
        'status': this.currenttask.status
      } 
    }
    setNotdone(){
      const isTaskFound= this.tasks.find(task=>this.currenttask.id===task.id)
        if(isTaskFound){
          this.tasks[this.currenttask.id-1].status=this.status.grey;
        }
    }
    public trackItem (index:any, task:any) {
      return task? task. id : undefined;
    }
    setInprogress(){
      const isTaskFound= this.tasks.find(task=>this.currenttask.id===task.id)
      if(isTaskFound){
        this.tasks[this.currenttask.id-1].status=this.status.yellow;
      }
    }
    setCompleted(){
      const isTaskFound= this.tasks.find(task=>this.currenttask.id===task.id)
      if(isTaskFound){
        this.tasks[this.currenttask.id-1].status=this.status.green;
      }
    }

}
