import { ObservableInput, OperatorFunction, Subject, observable } from "rxjs"
import { share } from "rxjs/operators"
type SourceType<T, R> = ((value: T) => void) & ObservableInput<R>

function handler<T>(): SourceType<T, T>
function handler<T, A>(op1: OperatorFunction<T, A>): SourceType<T, A>
function handler<T, A, B>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>
): SourceType<T, B>
function handler<T, A, B, C>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>
): SourceType<T, C>
function handler<T, A, B, C, D>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>,
  op4: OperatorFunction<C, D>
): SourceType<T, D>
function handler<T, A, B, C, D, E>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>,
  op4: OperatorFunction<C, D>,
  op5: OperatorFunction<D, E>
): SourceType<T, E>
function handler<T, A, B, C, D, E, F>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>,
  op4: OperatorFunction<C, D>,
  op5: OperatorFunction<D, E>,
  op6: OperatorFunction<E, F>
): SourceType<T, F>
function handler<T, A, B, C, D, E, F, G>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>,
  op4: OperatorFunction<C, D>,
  op5: OperatorFunction<D, E>,
  op6: OperatorFunction<E, F>,
  op7: OperatorFunction<F, G>
): SourceType<T, G>
function handler<T, A, B, C, D, E, F, G, H>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>,
  op4: OperatorFunction<C, D>,
  op5: OperatorFunction<D, E>,
  op6: OperatorFunction<E, F>,
  op7: OperatorFunction<F, G>,
  op8: OperatorFunction<G, H>
): SourceType<T, H>
function handler<T, A, B, C, D, E, F, G, H, I>(
  op1: OperatorFunction<T, A>,
  op2: OperatorFunction<A, B>,
  op3: OperatorFunction<B, C>,
  op4: OperatorFunction<C, D>,
  op5: OperatorFunction<D, E>,
  op6: OperatorFunction<E, F>,
  op7: OperatorFunction<F, G>,
  op8: OperatorFunction<G, H>,
  op9: OperatorFunction<H, I>
): SourceType<T, I>
function handler<T, R>(
  ...operations: OperatorFunction<any, any>[]
): SourceType<T, R>
function handler<T>(...operations) {
  const subject = new Subject<T>()
  const source = subject.pipe(...operations, share())

  const next = (...args) => subject.next(...args)
  next[observable] = () => source
  return next
}

export { handler, SourceType }
