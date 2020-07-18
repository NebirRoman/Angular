import { Component, OnInit } from '@angular/core';
import { IWork } from './work.interface';
import { Work } from './work.model';
import { BtnsService } from '../shared/services/btns.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  worksList: Array<IWork> = [
    {
      title: 'Angular list of prohibited words',
      img: '../../assets/images/cenzor.jpeg',
      details: '/works/wordslist'
    },
    {
      title: 'Angular tasks list ',
      img: '../../assets/images/taskslist.jpeg',
      details: '/works/taskslist'
    },
    {
      title: 'Angular users list',
      img: '../../assets/images/userslist.jpeg',
      details: '/works/userslist'
    }
  ];

  constructor(private Srv: BtnsService) { }

  ngOnInit(): void {
  }

  activeBtn(i: number): void {
    this.Srv.activeBtn = i;
  }
}
