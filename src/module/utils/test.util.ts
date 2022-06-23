import { BaseEntity } from 'typeorm';

export function generateTestObject<T>(ObjectClass: { new (): T }, values: Partial<T> = {}): T {
  return Object.assign(new ObjectClass(), values);
}

export function mockClass<T>(ObjectClass: { new (...args: any): T }): {
  provide: { new (...args: any): T };
  useValue: T;
} {
  const instance: T = {} as T;

  for (const name of Object.getOwnPropertyNames(ObjectClass.prototype)) {
    instance[name] = jest.fn();
  }

  for (const methodName of Object.getOwnPropertyNames(BaseEntity.prototype)) {
    instance[methodName] = jest.fn();
  }

  return { provide: ObjectClass, useValue: instance };
}
