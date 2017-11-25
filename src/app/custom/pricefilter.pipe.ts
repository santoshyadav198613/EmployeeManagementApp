import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../service/employee/employee';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(employee: Employee[], price: number): any {
    if (employee !== undefined) {
      console.log(employee);
      return employee.filter((data) => data.salary > price);
    }

  }

}
