import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener-example',
  imports: [],
  templateUrl: './host-listener-example.component.html',
  styleUrl: './host-listener-example.component.css'
})
export class HostListenerExampleComponent {
  bgColor = "blue";
  color = "white";

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor = 'green';
    this.color = "white";
  } 

  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor = 'blue';
    this.color = "white";
  }

  @HostListener('click') onMouseClick(){
    this.bgColor = 'yellow';
    this.color = "black";
  }
}
