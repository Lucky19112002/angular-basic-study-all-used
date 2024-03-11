import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  showElement: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  mode: 'day' | 'night' = 'day';
  bgColor: string = 'pink';
  textColor: string = 'orange';
  isAdmin: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['decorator']);
  }

  toggleMode() {
    this.mode = this.mode === 'day' ? 'night' : 'day';
    document.body.className = this.mode;
  }
}
