import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq.service'

@Component({
  moduleId:module.id,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css','../../assets/css/TipsStyle.css']
})
export class FaqComponent implements OnInit {

 faq: any = [];

  constructor(private faqserv: FaqService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.faqserv.getAllFAQs().subscribe(faq => {
      this.faq = faq;
    });

}
}