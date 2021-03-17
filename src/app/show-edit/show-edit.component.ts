import {Component, OnInit} from '@angular/core';
import {Show} from '../model/Show';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ShowService} from '../model/api/show.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css']
})
export class ShowEditComponent implements OnInit {
  show: Show;
  pageTitle: string;
  isInEditMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showService: ShowService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.isInEditMode = id !== 0;
    if (this.isInEditMode) {
      this.getShow(id);
    } else {
      this.show = {
        id: undefined,
        title: '',
        releaseYear: undefined,
        imdbUrl: '',
        netflixUrl: '',
        coverUrl: undefined,
        myRating: undefined,
      };
    }
    if (!this.isInEditMode) {
      this.pageTitle = 'Add a new show';
    }
  }

  private getShow(id: number): void {
    this.showService.getShow(id).subscribe(show => {
      this.show = show;
      this.pageTitle = `Editing ${show.title}`;
    });
  }

  goBack(): void {
    if (this.isInEditMode){
      this.location.back();
    } else {
      this.router.navigate(['..']);
    }
  }

  save(): void {
    if (this.isInEditMode) {
      this.showService.updateShow(this.show).subscribe(() => this.goBack());
    } else {
      this.showService.addShow(this.show).subscribe(() => this.goBack());
    }
  }
}
