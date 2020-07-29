export type ConditionType<P> = (key: P) => boolean;
export type ActionType<R> = () => R;

export default interface IConditionalAction<P, R> {

  condition: ConditionType<P>;
  action: ActionType<R>;

}
