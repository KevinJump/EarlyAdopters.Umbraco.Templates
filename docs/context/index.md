# Contexts

A context is a little bit like aa service from the AngularJs version of the Umbraco backoffice, although you often will have it seperated out a bit more into context, stores and other bits!. 

# What is a context
A context is essentially a class that allows you to keep state between bits of the application, be that your dashboard, a content app (see [workspaces]()) or the whole Umbraco App. 

# A Simple context. 
A simple counter context might look like this.

```ts
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbNumberState } from "@umbraco-cms/backoffice/observable-api";

/**
 * @export
 * @class MyPackageCounterContext
 */
export class MyPackageCounterContext {

    #counter = new UmbNumberState(1);
    public readonly counter = this.#counter.asObservable();

    /**
     * @description Increments the counter
     * @memberof MyPackageCounterContext
     */
    public increment() {
        this.#counter.setValue(this.#counter.value + 1);
    }
}

export const UMB_MYPACKAGE_SERVICE_CONTEXT_TOKEN
    = new UmbContextToken<MyPackageCounterContext>('MyPackageCounterContext');

```

## Key things to note here : 

### The counter property is returning an 'observable' propery
  An observable property is something that other bit of code can observe, and trigger code when it changes etc.

### The class is exported with a TOKEN
The token `UMB_MYPACKAGE_SERVICE_CONTEXT_TOKEN` is the constant we can use to get the context later on in our elements. 

It is wrapped as a `UmbContextToken` which for now lets say does some umbraco magic around the context.

## Providing and Consuming
For a context to exist it has to be provided by something!

For custom contexts that will be an element you are inserting into the umbraco backoffice - such as your dashboard, or property. 

to provide a context, you element needs to create a new version of the context and tell umbraco it is providing it. 

```ts
 private _myPackageCounterContext = new MyPackageCounterContext();

 constructor() {
     super();
     
     this.provideContext(UMB_MYPACKAGE_SERVICE_CONTEXT_TOKEN, this._myPackageCounterContext);
     this.observe(this._myPackageCounterContext.counter, (counter) => {
         console.log('count:', counter);
         this.counter = counter;

     });
 }
 ```

So in the code above our dashboard provides the context but it is also observing the counter, so when the counter changes we can run some code against it. 

## Consuming a context
If you element or component isn't the thing to be providing a context you can consume it .

this code is very simialr but you wrap the whole thing in the consume context.

```ts
this.consumeContext(UMB_MYPACKAGE_SERVICE_CONTEXT_TOKEN, (_instance) => {
    this.observe(_instance.counter, (counter) => {
        console.log('count:', counter);
        this.counter = counter;
    });
});
```

> It's important to remember that something has to provide a custom context! or you will spend hours pulling your hair out wondering why it never seems to get the code called!

