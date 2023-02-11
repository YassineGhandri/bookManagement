import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
book: Book;
  constructor(private route:ActivatedRoute, 
              private booksServices:BooksService, 
              private router:Router) { }

  ngOnInit(): void {
    this.book= new Book('','');
    const id=this.route.snapshot.params['id'];
    this.booksServices.getSingleBook(+id).then(
      /*(book: Book)=>{
      this.book=book;
      } */  );
       
  }

  onBack(): void{
    this.router.navigate(['/books']);
  }

}
