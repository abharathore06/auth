import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private auth:AuthService) {
  
    this.loadState();
    const admin=this.auth.login ;
    console.log(admin);
    
    
   }
  
  ngOnInit(): void {
  }
  todos:any[]=[];
  complete:boolean=false;
  add(task:any){
    console.log(task);
    
    this.todos.push(task);
    console.log(this.todos);
    this.saveState();
    
  }
  getTodos(){
    return this.todos
  }
  getTodo(id:string){
    return this.todos.find(t=>t.id==id)
  }
  deleteTodo(index:any){
    console.log(index);
    if(index==-1)return
    this.todos.splice(index,1);
    this.saveState();
  }
  saveState(){
    localStorage.setItem("todo",JSON.stringify(this.todos))
  }
  loadState(){
    try{
      const todoInStorage=JSON.parse(localStorage.getItem('todo')|| '{}');
    if(!todoInStorage) return;
    this.todos.length=0;
    this.todos.push(...todoInStorage);
    }
    catch(e){
      console.log("something is wrong");
      console.log(e);
      
      
    }
  }
  iscomplete(){
     this.complete=!this.complete;
  }
}
