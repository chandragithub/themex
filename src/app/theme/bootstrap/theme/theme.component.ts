import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../color.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  message: any;
  theme: any;

  constructor(private colorService: ColorService) { 
  }

  ngOnInit() {
    this.colorService.currentColor.subscribe(message => this.message = message);
  }
}
