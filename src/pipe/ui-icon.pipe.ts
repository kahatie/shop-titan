import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uiIcon'
})
export class UiIconPipe implements PipeTransform {
  constructor(@Inject('ASSETURL') private assetUrl: string) {}

  transform(value: string): string {
    return (
      'background: rgba(0, 0, 0, 0) url("' +
      this.assetUrl +
      value +
      '") no-repeat scroll center center / contain;'
    );
  }
}
