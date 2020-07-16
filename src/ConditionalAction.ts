export type ConditionType<P> = (key: P) => boolean;
export type ActionType<R> = () => R;

export default class ConditionalAction<P, R> {

  public condition: ConditionType<P>;
  public action: ActionType<R>;

  constructor(condition: ConditionType<P>, action: ActionType<R>) {
    this.condition = condition;
    this.action = action;
  }

}
