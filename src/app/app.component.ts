import { Component,OnInit,AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ChildComponent } from './child/child.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit{
  ngOnInit() {}
  title = "project1";

  allowServer = false;
  color = "yellow";
  height: number = 40;

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  num1: number = 20;
  num2: number = 30;
  result: number;
  status: any = "server status";

  add() {
    this.result = this.num1 + this.num2;
  }

  onClickStatus() {
    this.status = "Server was created";
  }

  statusName = "";
  onUpdate(event: Event) {
    console.log(event.target);
    this.statusName = (<HTMLInputElement>event.target).value;
  }

  number1: number = 34;
  number2: number;
  answer: number;

  addnum() {
    this.answer = this.number1 + this.number2;
  }

  subnum() {
    this.answer = this.number1 - this.number2;
  }

  // parent and child communication using @input
  m1: string = "Parent compoent";
  m2: string = "child component";

  //parent and child communication using @output
  count : any;
  displayChild(count){
    console.log(count);
  }

  view(name:HTMLInputElement){
    console.log(name);
    console.log((<HTMLInputElement>name).textContent);
  }
  
  // //display elements on the native view
  // @ViewChild('elemRef', {static:false})
  // elemRef: ElementRef;

  //  ngAfterViewInit(){
  //   console.log('Values on ngAfterViewInit():');
  //    console.log(this.elemRef.nativeElement);
  //  }

    //display elements on the child view
  @ViewChild (ChildComponent, {static:false})firstViewChild:ChildComponent;

   ngAfterViewInit(){
     console.log(this.firstViewChild.forViewChild());
   }

   data:any[]=
     [
      {id: 0, name: "policy001"},
      {id: 2, name: "policy002"},
      {id: 3, name: "policy003"},
      {id: 4, name: "policy004"},
      {id: 5, name: "policy005"},
     ];

    ifDisplay : boolean = false;

    show: boolean=true;


}
