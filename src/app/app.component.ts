import { Component } from '@angular/core';
import { Iplayers } from './model/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'filterPipe';
  searchByValue!: string;
  odiMatches: Iplayers[] = [
    {
      country: 'India',
      noOfPlayers: 11,
      runs: 320,
      captain: 'Virat Kohli',
      year: 2021,
    },
    {
      country: 'Australia',
      noOfPlayers: 11,
      runs: 280,
      captain: 'Aaron Finch',
      year: 2021,
    },
    {
      country: 'England',
      noOfPlayers: 11,
      runs: 305,
      captain: 'Eoin Morgan',
      year: 2020,
    },
    {
      country: 'Pakistan',
      noOfPlayers: 11,
      runs: 265,
      captain: 'Babar Azam',
      year: 2022,
    },
    {
      country: 'South Africa',
      noOfPlayers: 11,
      runs: 290,
      captain: 'Quinton de Kock',
      year: 2022,
    },
    {
      country: 'Sri Lanka',
      noOfPlayers: 11,
      runs: 245,
      captain: 'Dimuth Karunaratne',
      year: 2021,
    },
    {
      country: 'New Zealand',
      noOfPlayers: 11,
      runs: 330,
      captain: 'Kane Williamson',
      year: 2022,
    },
    {
      country: 'West Indies',
      noOfPlayers: 11,
      runs: 275,
      captain: 'Kieron Pollard',
      year: 2020,
    },
    {
      country: 'Bangladesh',
      noOfPlayers: 11,
      runs: 260,
      captain: 'Tamim Iqbal',
      year: 2023,
    },
    {
      country: 'Afghanistan',
      noOfPlayers: 11,
      runs: 225,
      captain: 'Rashid Khan',
      year: 2022,
    },
    {
      country: 'Zimbabwe',
      noOfPlayers: 11,
      runs: 200,
      captain: 'Brendan Taylor',
      year: 2021,
    },
    {
      country: 'Ireland',
      noOfPlayers: 11,
      runs: 210,
      captain: 'Andy Balbirnie',
      year: 2020,
    },
    {
      country: 'Netherlands',
      noOfPlayers: 11,
      runs: 180,
      captain: 'Pieter Seelaar',
      year: 2023,
    },
    {
      country: 'Scotland',
      noOfPlayers: 11,
      runs: 195,
      captain: 'Kyle Coetzer',
      year: 2022,
    },
    {
      country: 'UAE',
      noOfPlayers: 11,
      runs: 220,
      captain: 'Ahmed Raza',
      year: 2021,
    },
    {
      country: 'Oman',
      noOfPlayers: 11,
      runs: 175,
      captain: 'Zeeshan Maqsood',
      year: 2020,
    },
    {
      country: 'Namibia',
      noOfPlayers: 11,
      runs: 190,
      captain: 'Gerhard Erasmus',
      year: 2023,
    },
    {
      country: 'Canada',
      noOfPlayers: 11,
      runs: 170,
      captain: 'Navneet Dhaliwal',
      year: 2021,
    },
    {
      country: 'Kenya',
      noOfPlayers: 11,
      runs: 155,
      captain: 'Shem Ngoche',
      year: 2022,
    },
    {
      country: 'Bermuda',
      noOfPlayers: 11,
      runs: 140,
      captain: 'Kamau Leverock',
      year: 2020,
    },
  ];
}
