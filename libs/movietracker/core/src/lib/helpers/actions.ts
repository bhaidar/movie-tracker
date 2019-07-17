import { MtAction } from '../interfaces/action.interface';
import { actionTypes } from '../enums/action-types.enum';

export namespace actions {
  export const addAction: MtAction = {
    type: actionTypes.add,
    label: 'Add'
  };

  export const editAction: MtAction = {
    type: actionTypes.edit,
    label: 'Edit'
  };

  export const deleteAction: MtAction = {
    type: actionTypes.delete,
    label: 'Delete'
  };

  export const dismissAction: MtAction = {
    type: actionTypes.dismissChanges,
    label: 'Dismiss'
  };

  export const saveAction: MtAction = {
    type: actionTypes.saveChanges,
    label: 'Save'
  };
}
