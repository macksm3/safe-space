import { Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IBusiness, TableService } from "./table.service";
import SampleJson from '../../assets/SampleJson.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [TableService],
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = [ 'type', 'name', 'city', 'state', 'description', 'website' ];
  public dataSource = new MatTableDataSource([]);
  public businessesArr: IBusiness[];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private tableService: TableService, private cdr: ChangeDetectorRef) {}
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngOnInit() {
    this.showBusinesss();
  }
  
  showBusinesss() {
    this.tableService.getBusinesss()
    .subscribe(
      (data) => {
        this.businessesArr = [ ...data ];
        this.dataSource = new MatTableDataSource(this.businessesArr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        this.cdr.detectChanges();

        console.log("I'm your showBusinesss function!");
        console.log(this.businessesArr);
        console.log("I'm your dataSource")
        console.log(this.dataSource);
      }
    )
  }

}

// LOCAL JSON SAMPLE DATA
// export interface SampleJsonTable {
//   type: string;
//   name: string;
//   city: string;
//   state: string;
//   site: string;
//   description: string;
// }

// const SAMPLE_DATA: SampleJsonTable[] = SampleJson;

/* Static data */

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
