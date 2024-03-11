import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css'],
  providers: [UserService],
})
export class DecoratorComponent implements OnInit {
  users: string[] = [];

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightpink';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'black';
  }

  clickFunction() {
    this.router.navigate(['pipelinenew']);
  }
}
