import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() id: number;
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() category: string;
  @Input() price: number;

  constructor() {
    this.id = 0;
    this.image = '';
    this.title = '';
    this.description = '';
    this.category = '';
    this.price = 0;
  }
}
