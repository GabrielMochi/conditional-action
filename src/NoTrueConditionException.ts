export default class NoTrueConditionException extends Error {

  constructor(message: string = 'No true condition was returned') {
    super(message);
  }

}
