import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../color.service';

@Component({
  selector: 'app-theme-control',
  templateUrl: './theme-control.component.html',
  styleUrls: ['./theme-control.component.css']
})
export class ThemeControlComponent implements OnInit {

  theme: any;
  message: any = {
    "basic_text": "#5AA572",
    "primary_text": "#007bff",
    "secondary_text": "#6c757d",
    "success_text": "#28a745",
    "info_text": "#17a2b8",
    "warning_text": "#ffc107",
    "danger_text": "#dc3545",
    "dark_text": "#343a40",
    "light_text":"#f8f9fa",
    "link_text": "#5AA572"
  }

  constructor(private colorService: ColorService) { 
    this.colorService.changeColor(this.message);
  }

  ngOnInit() {
    this.colorService.currentColor.subscribe(message => {
      this.message = message;
    });
  }

  ngAfterContentChecked() {
    this.theme = this.message;
    this.colorService.changeColor(this.theme);
  }

}
