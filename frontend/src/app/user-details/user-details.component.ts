import { Component } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent {
  name: string = '';
  modifiedName: string = '';

  constructor(private userDetailsService: UserServiceService) {}

  sendName() {
    this.userDetailsService.modifyName(this.name).subscribe({
      next: (res: any) => {
        console.log(res);
        this.modifiedName = res.modifiedName;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
