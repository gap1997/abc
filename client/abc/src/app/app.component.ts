import { Component, OnInit } from '@angular/core';
import { SerService } from './ser.service';
import { DeleteService } from './delete.service';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public Batches: any = [];

  constructor(
    public mobj: SerService,
    private deleteservice: DeleteService,
    private upadteService: UpdateService
  ) {}

  ngOnInit() {
    return this.mobj.getDetails().subscribe((data) => (this.Batches = data));
  }

  //delete user
  deleteUser(userId: string): void {
    // console.log(userId);

    this.deleteservice.deleteUser(userId).subscribe(
      () => {
        console.log('user deleted succesfully');
      },
      (error) => {
        console.error('Error Deleteing User:', error);
      }
    );
  }
  ///update user
  updateUser(userId: string) {
    const updateData = {
      fristName: 'Updated First Name',
      lastname: 'Updated Last Name',
      dateOfBirth: '',
      city: 'Updated City',
      active: true,
    };
    this.upadteService.updateUser(userId, updateData).subscribe(
      () => {
        console.log('User data updated SuccessFully');
      },
      (error) => {
        console.error('error updateing user data:', error);
      }
    );
  }
}
