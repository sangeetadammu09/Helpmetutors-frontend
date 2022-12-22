import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  //   $('.counter-count').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 5000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });
  }

}
