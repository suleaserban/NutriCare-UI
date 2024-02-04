import { Injectable } from '@angular/core';
import { Filter } from 'src/app/models/filters.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filters: Filter[] = [
    { name: 'Inima', value: 'factor_inima', checked: false },
    { name: 'Stres', value: 'factor_stres', checked: false },
    { name: 'Energie', value: 'factor_energie', checked: false },
    { name: 'Fitness', value: 'factor_fitness', checked: false },
    { name: 'Dispozitie', value: 'factor_dispozitie', checked: false },
    { name: 'Digestie', value: 'factor_digestie', checked: false },
    {
      name: 'Par piele si unghii',
      value: 'factor_par_piele_si_unghii',
      checked: false,
    },
    { name: 'Oase', value: 'factor_par_piele_si_unghii', checked: false },
    { name: 'Articulatii', value: 'factor_articulatii', checked: false },
    { name: 'Imunitate', value: 'factor_imunitate', checked: false },
    { name: 'Creier', value: 'factor_creier', checked: false },
    { name: 'Ficat', value: 'factor_ficat', checked: false },
  ];

  getFilters(): Filter[] {
    return this.filters;
  }
}
