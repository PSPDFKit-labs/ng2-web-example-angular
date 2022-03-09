import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ng2-pdf-viewer';
  src: string = 'assets/demo.pdf';
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
}
// export class AppComponent {
//   title: string = 'ng2-pdf-viewer';
//   src: string = 'assets/demo.pdf';
// }
