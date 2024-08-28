import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { tap, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, MatTableModule, CommonModule,MatPaginatorModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'role'];
  dataSource = new MatTableDataSource<User>();
  totalLength = 0;
  pageSize = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  initDataSource(): void {
    this.userService.findAll().pipe(
      tap(users => {
        this.dataSource.data = users;
        this.totalLength = users.length;  // Update total length
      })
    ).subscribe();
  }
}
