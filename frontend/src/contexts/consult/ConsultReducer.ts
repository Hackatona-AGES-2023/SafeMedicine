import { IConsult } from '@/models/consult';
import { GenericAction } from '@/models/reducer';

export interface ConsultState {
  loading: boolean;
  values: IConsult;
}

export const INITIAL_STATE: ConsultState = {
  loading: false,
  values: {
    diagnosys: '',
    symptoms: '',
    response: '',
  },
};

export type ConsultActions =
  | GenericAction<'setLoading', boolean>
  | GenericAction<'setValues', Partial<IConsult>>
  | GenericAction<'reset', undefined>;

export default function ConsultReducer(
  state: ConsultState,
  action: ConsultActions
): ConsultState {
  const { type, payload } = action;
  switch (type) {
    case 'setLoading':
      return { ...state, loading: payload };
    case 'setValues':
      return { ...state, values: { ...state.values, ...payload } };
    case 'reset':
      return { ...INITIAL_STATE };
    default:
      return { ...state };
  }
}
