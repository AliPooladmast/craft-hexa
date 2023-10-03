import { Component } from '@angular/core';
import { coursesService } from '../../services/courses.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
    <img [src]="imageUrl" alt="course image" />
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <div (click)="onDivClicked()">
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        (click)="onSave($event)"
      >
        Save
      </button>
    </div>
    <input [(ngModel)]="email" type="email" (keyup.enter)="onKeyUp()" />
    <br />
    {{ course.title | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number : '2.1-2' }} <br />
    {{ course.price | currency : 'EUR' : true : '2.1-1' }} <br />
    {{ course.releaseDate | date : 'shortDate' }} <br />
    {{ text | summary : 20 }} <br /> `,
})
export class CoursesComponent {
  title = 'List of the courses';
  imageUrl =
    'https://www.wemakescholars.com/uploads/blog/TopprofessionalITcoursetopursueincollege.jpg';
  colSpan = 2;
  isActive = true;
  courses;
  email = '';
  course = {
    title: 'The Complete Angular Course',
    students: 30215,
    rating: '4.9745',
    price: 190.85,
    releaseDate: new Date(2016, 3, 12),
  };
  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi atque exercitationem odio accusamus ipsa enim quod dolor, eaque sed consequuntur tempore asperiores esse commodi id in quis molestias et!`;

  onSave = ($event: MouseEvent) => {
    $event.stopPropagation();
    console.log('button is clicked', $event);
  };

  onDivClicked = () => {
    console.log('div is clicked');
  };

  onKeyUp = () => {
    console.log(this.email);
  };

  constructor(service: coursesService) {
    this.courses = service.getCourses();
  }
}
