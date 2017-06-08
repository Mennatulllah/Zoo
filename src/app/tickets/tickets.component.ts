import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service'


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets:any=[];

  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
     this.ticketServ.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

}

