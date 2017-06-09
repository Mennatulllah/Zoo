import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FAQFilterPipe implements PipeTransform {
    transform(value: any[], filterKey): any {
        return value.filter(f=>f.FAQType.Name==filterKey);
    }
}