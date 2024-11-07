import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../services/data.service';
import { Permission } from '../models/permission.model';

@Component({
  selector: 'access-requests',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './access-requests.component.html',
  styleUrl: './access-requests.component.css',
})
export class AccessRequests {
  constructor(private dataService: DataService) {}
  title = 'access-requests';
  data: Permission[] = [];
  loading = true;

  ngOnInit() {
    this.dataService
      .get<Permission[]>('/api/v1/permissions')
      .subscribe((apiData) => {
        this.data = apiData;
        this.loading = false;
      });
  }
}
