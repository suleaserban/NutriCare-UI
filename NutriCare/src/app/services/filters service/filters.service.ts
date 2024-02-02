import { Injectable } from '@angular/core';
import { Filter } from 'src/app/models/filters.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filters: Filter[] = [
    { name: 'Inima', value: 'factor_inima' },
    { name: 'Stres', value: 'factor_stres' },
    { name: 'Energie', value: 'factor_energie' },
    { name: 'Fitness', value: 'factor_fitness' },
    { name: 'Dispozitie', value: 'factor_dispozitie' },
    { name: 'Digestie', value: 'factor_dispozitie' },
    { name: 'Par piele si unghii', value: 'factor_par_piele_si_unghii' },
    { name: 'Oase', value: 'factor_par_piele_si_unghii' },
    { name: 'Articulatii', value: 'factor_articulatii' },
    { name: 'Imunitate', value: 'factor_imunitate' },
    { name: 'Creier', value: 'factor_creier' },
    { name: 'Ficat', value: 'factor_ficat' },
  ];

  getFilters(): Filter[] {
    return this.filters;
  }
}
