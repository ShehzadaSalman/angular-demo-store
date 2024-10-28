import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProductListingSectionComponent } from '../../components/product-listing-section/product-listing-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ProductListingSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
