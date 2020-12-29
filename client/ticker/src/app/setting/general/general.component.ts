import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'st-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  platformOptions = [
    {
      value: 'http://api.marketstack.com/v1/intraday?access_key=',
      displayValue: 'marketstack',
    },
  ];
  exchangeOptions = [
    {
      value: 'NYSE',
    },
    {
      value: 'NASDAQ',
    },
    {
      value: 'TSE',
    },
    {
      value: 'NSE',
    },
  ];

  generalForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generalForm = this.fb.group({
      cpt: '3',
      lowPollingInterval: '15',
      defaultPollingInterval: '10',
      highPollingInterval: '5',
      stockApiPlatform: 'http://api.marketstack.com/v1/intraday?access_key=',
      exchangeMarket: 'NASDAQ',
      accessKey: '',
    });
  }
}
