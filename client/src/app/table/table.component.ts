import { Component, Input, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IBusiness, TableService } from "../services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [TableService],
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  public pageTitle: string;
  public stateName: string;
  public resourceType: string;

  public displayedColumns: string[] = ['type', 'name', 'city', 'state', 'description', 'website'];
  public dataSource = new MatTableDataSource([]);
  public businessesArr: IBusiness[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private tableService: TableService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        // Passing Resource Type & State in to TableService from Router
        this.stateName = data.state;
        console.log("I'm your stateName");
        console.log(this.stateName);

        this.resourceType = data.type;
        console.log("I'm your resourceType");
        console.log(this.resourceType);

        this.showBusinesses(this.resourceType, this.stateName);

        // Setting Page title
        this.pageTitle = this.capitalizeFirstLetter(data.type + "s");
      });
  }

  showBusinesses(resource: string, state: string) {
    this.tableService.getBusinesses(resource, state)
      .subscribe(
        (data) => {
          this.businessesArr = [...data];
          this.dataSource = new MatTableDataSource(this.businessesArr);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          this.cdr.detectChanges();

          // console.log("I'm your showBusinesses function!");
          console.log(this.businessesArr);
          // console.log("I'm your dataSource")
          // console.log(this.dataSource);
        }
      )
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}