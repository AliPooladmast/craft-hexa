import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/course/courses.component';
import { CourseComponent } from './components/course/course.component';
import { coursesService } from './services/courses.service';
import { AuthorsComponent } from './components/authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { BootstrapPanelComponent } from './components/bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './components/like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { TopicsComponent } from './components/topics/topics.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './app-errors/app-error-handler';
import { GitFollowersComponent } from './components/git-followers/git-followers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    BootstrapPanelComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    TopicsComponent,
    ChangePasswordComponent,
    PostsComponent,
    GitFollowersComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path: 'followers', component: GitFollowersComponent },
      { path: 'followers/:id', component: ProfileComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    coursesService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
