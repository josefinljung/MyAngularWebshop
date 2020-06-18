import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { MovieService } from 'src/app/services/movieService/movie.service';
import { MockMovieService } from 'src/app/services/movieService/mockMovieService';
import { CartService } from 'src/app/services/cartService/cart.service';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [ MoviesComponent, {provide: MovieService, useClass: MockMovieService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies', () => {
    component.ngOnInit();
    expect(component.movies.length).toBe(2);
  });

  it('should add movies to cart', () => {
    const myCartService = new CartService();
    expect(myCartService.cartList.length).toBe(0);
    component.addToCart({ Name: 'film', ImageUrl: 'enurl', Year: '2000', Price: 33, Id: 10, Description: 'beskrivning'});
    myCartService.addToCart({ Name: 'film', ImageUrl: 'enurl', Year: '2000', Price: 33, Id: 10, Description: 'beskrivning'});
    expect(myCartService.cartList.length).toBe(1);
  });
});
