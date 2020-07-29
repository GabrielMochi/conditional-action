import NoTrueConditionException from '../exceptions/NoTrueConditionException';
import IConditionalAction from '../interfaces/IConditionalAction';

export default class ConditionalActionFactory<P, R> {

  private conditionalActions: IConditionalAction<P, R>[];

  constructor(...conditionalActions: IConditionalAction<P, R>[]) {
    this.conditionalActions = conditionalActions;
  }

  public play(key: P): R {
    const matchCondition: IConditionalAction<P, R> | undefined = this.conditionalActions
      .find(({ condition }: IConditionalAction<P, R>): boolean => condition(key));

    if (!matchCondition) throw new NoTrueConditionException();

    return matchCondition.action();
  }

}
