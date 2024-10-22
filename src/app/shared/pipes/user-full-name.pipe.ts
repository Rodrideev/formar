import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../pages/dashboard/users/models';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    const result = value.firstName + " " + value.lastName;
    return result;
  }

}
