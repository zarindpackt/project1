import { Component, OnInit, Input, Output, OnChanges } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() msg: string;

  @Output() child = new EventEmitter();
  counter = 0;
  useChild() {
    this.counter = this.counter + 1;
    this.child.emit(this.counter);
  }

  color = "blue";
  ngOnChanges(){
    if(this.counter > 5){
      this.color = "red";
      console.log("gereetwe");
    }
    else{
      this.color = "blue";
    }
  }

  view(name:HTMLInputElement){
    console.log(name);
    console.log((<HTMLInputElement>name).textContent);
  }

  forViewChild(){
    return 'hello this is viewing from child';
  }

  constructor() {}

  ngOnInit() {}
}
