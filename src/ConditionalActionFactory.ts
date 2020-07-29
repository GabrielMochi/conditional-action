import ConditionalAction from './ConditionalAction';
import NoTrueConditionException from './NoTrueConditionException';

export default class ConditionalActionFactory<P, R> {

  public conditionalActions: ConditionalAction<P, R>[];

  constructor(...conditionalActions: ConditionalAction<P, R>[]) {
    this.conditionalActions = conditionalActions;
  }

  public play(key: P): R {
    const matchCondition: ConditionalAction<P, R> | undefined = this.conditionalActions
      .find(({ condition }: ConditionalAction<P, R>): boolean => condition(key));

    if (!matchCondition) throw new NoTrueConditionException();

    return matchCondition.action();
  }

}
