import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth service/auth.service';
import { UserScoreService } from '../../services/user score service/userScore.service';
import { UserScoreDTO } from '../../models/userScoreDTO';
import { ProductDTO } from 'src/app/models/productDTO';
import { ProductService } from 'src/app/services/product service/product.service';
import { forkJoin, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-reco',
  templateUrl: './my-reco.component.html',
  styleUrls: ['./my-reco.component.css'],
})
export class MyRecoComponent implements OnInit {
  constructor(
    private userScoreService: UserScoreService,
    private productService: ProductService
  ) {}

  recommendedProducts!: ProductDTO[];
  selectedProduct: ProductDTO = <ProductDTO>{};
  showModal = false;

  ngOnInit(): void {
    let id = localStorage.getItem('id');

    this.userScoreService
      .getTopUserScores(parseInt(id!))
      .pipe(
        switchMap((topScores: UserScoreDTO[]) => {
          const productIds = topScores.map((score) => score.productId);
          return this.productService.getRecommendedProducts(productIds);
        })
      )
      .subscribe((products: ProductDTO[]) => {
        this.recommendedProducts = products;
      });
  }
  listRecommendedProducts() {
    console.log(this.recommendedProducts);
  }

  openModal(product: ProductDTO): void {
    this.selectedProduct = product ?? <ProductDTO>{};
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
  goToShoppingCart() {}
}
