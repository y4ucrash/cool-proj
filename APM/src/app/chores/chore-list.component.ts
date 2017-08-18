import { Component, ViewChild } from '@angular/core';
import { IChore } from "./chore";

@Component({
    selector: 'pm-chores',
    styleUrls: ['./chore-list.component.css'],
    templateUrl: './chore-list.component.html'

})
export class ChoreListComponent{
    regularTitle: string = 'List of Chores';
    noChoresTitle: string = 'No Chores!';

    _choreListFilter: string;
    _abbyTotal: Number;
    _reyTotal: Number;

    get listFilter(): string {
        return this._choreListFilter;
    }
    set listFilter(value: string) {
        this._choreListFilter = value;
        this.filteredChores = this.listFilter ? this.doChoreTextFilter(this.listFilter) : this.chores;
    }

    filteredChores: IChore[];
    filteredAmounts: Number;

    chores: IChore[] = [
        {
            "choreID": 0,
            "choreName": "Dishes",
            "choreWorth": 2.00   
        },
        {
            "choreID": 1,
            "choreName": "Trash",
            "choreWorth": 1.00     
        },   
        {
            "choreID": 2,
            "choreName": "Vacuum",
            "choreWorth": .50
        },
        {
            "choreID": 3,
            "choreName": "Room",
            "choreWorth": 2.00
        },
        {
            "choreID": 4,
            "choreName": "Bathroom",
            "choreWorth": 2.00
        },
        {
            "choreID": 5,
            "choreName": "Car",
            "choreWorth": 5.00
        },
    ];

    kids: any[] = [
        {
            "kidName": "Abigail"            
        },
        {
            "kidName": "Rey"
        }
    ]

    constructor()   {
        this.filteredChores = this.chores;
        this.listFilter = 'dishes';
    }

    doChoreTextFilter(filterBy: string): IChore[]{
        filterBy = filterBy.toLocaleLowerCase();

        return this.chores.filter((chore: IChore) => chore.choreName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    computeTotals(): number{
        var table = ViewChild('myTable');

        for (var i = 0; i < table.length; i++) {
            if(table.row[i])
            {
                console.log('sup');
            }
            
        }
        return 1;
    }
}