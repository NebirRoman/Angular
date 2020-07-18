import { Component, OnInit } from '@angular/core';
import { BtnsService } from '../shared/services/btns.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  constructor(private Srv: BtnsService) { }
  ngOnInit(): void {
    this.activeBtn();
  }
  active(e: any): void{
    document.querySelectorAll('.btn').forEach(elem => elem.classList.remove('active'));
    e.target.classList.add('active');
  }
  activeBtn(): void{
    document.querySelectorAll('.btn')[this.Srv.activeBtn].classList.add('active');
  }
  removeActive(): void{
    document.querySelectorAll('.btn').forEach(elem => elem.classList.remove('active'));
  }
}
