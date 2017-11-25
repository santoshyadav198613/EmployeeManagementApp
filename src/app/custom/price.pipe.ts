import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args1: string, args2: number, args3: number,args4: number): any {
    console.log(args2);
    console.log(args3);
    return args1 + ' ' +  value;
  }

}
