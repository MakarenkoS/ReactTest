import React from "react";

type PropsType = {};

export const Other = (props: PropsType) => {
  let str: string = "Hello";
  const numberArray: number[] = [0, 1, 2, 3];
  const numberArray2: Array<number> = [0, 1, 2, 3];

  //Tuple
  const contact: [string, number] = ["Vlad", 1233];

  let variable: any = 42;
  variable = "fff";

  // ============================

  function sayMyName(name: string): string {
    return name;
  }

  // Never============ либо возвращает ошибку, либо постоянно что-либо делает
  function throwError(message: string): never {
    throw new Error(message);
  }

  function inifinite(): never {
    while (true) {}
  }

  // Types

  type Login = string;
  const login: Login = "admin";
  // const login2: Login = 11

  type Id = string | number;
  const id1: Id = "111";
  const id2: Id = "true";

  type SomeType = string | null | undefined;
  const test: SomeType = undefined;

  // =========================Interfaces========================

  interface Rect {
    readonly id: string;
    color?: string;
    size: {
      width: number;
      height: number;
    };
  }

  const rect1: Rect = {
    id: "test",
    size: {
      width: 100,
      height: 50,
    },
  };

  rect1.color = "black";

  const rect2 = {} as Rect;

  interface RectWithArea extends Rect {
    getArea: () => number;
  }

  const rect3: RectWithArea = {
    id: "11",
    size: {
      width: 100,
      height: 50,
    },
    getArea(): number {
      return this.size.width * this.size.height;
    },
  };

  //==========================================
  // Interface inherit

  interface IClock {
    time: Date;
    setTime(date: Date): void;
  }

  class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
      this.time = date;
    }
  }

  interface Styles {
    [key: string]: string;
  }

  const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
  };

  // ===========================Enum==============================

  enum Membership {
    Simple,
    Standart,
    Premium,
  }

  const membership = Membership.Premium;
  const membershipReverse = Membership[1];

  console.log(membership);
  console.log(membershipReverse);

  enum SocialMedia {
    VK = "vk",
    FB = "FB",
    Insta = "Instagram",
  }

  const social = SocialMedia.Insta;
  console.log(social);

  // =============================Functions

  function add(a: number, b: number): number {
    return a + b;
  }

  function toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  //Overload function

  interface MyPosition {
    x: number | undefined;
    y: number | undefined;
  }

  // interface MyPositionWithDefault extends MyPosition {
  //   default: string
  // }

  function position(): MyPosition;
  function position(a: number): MyPosition;
  function position(a: number, b: number): MyPosition;

  function position(a?: number, b?: number) {
    if (!a && !b) {
      return { x: 1, y: undefined };
    }

    if (a && !b) {
      return { x: a, y: undefined, default: a.toString() };
    }

    return { x: a, y: b };
  }

  console.log("empty", position());
  console.log("one param", position(100));
  console.log("two params", position(5, 10));

  //=================Classes

  class TypeScript {
    version: string;

    constructor(version: string) {
      this.version = version;
    }

    info(name: string) {
      return `[${name}]: Typescript version is ${this.version}`;
    }
  }

  // class Car {
  //   readonly model: string
  //   readonly numberOfWheels:number = 4

  //   constructor(theModel: string) {
  //     this.model = theModel
  //   }
  // }
  // короткая запись Car
  class Car {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
  }

  // Modificator

  class Animal {
    protected voice: string = "";
    public color: string = "black"; //default
    private go() {
      console.log("go");
    }
  }

  class Cat extends Animal {
    public setVoice(voice: string) {
      this.voice = voice;
    }

    public useVoice() {
      console.log(this.voice);
    }
  }

  const cat = new Cat();
  cat.color = "white";
  cat.setVoice("uuuu");
  cat.useVoice();
  console.log(cat.color);

  //Abstract class

  abstract class Component {
    abstract renders(): void;
    abstract info(): string;
  }

  class AppComponent extends Component {
    renders(): void {
      console.log("on render");
    }

    info(): string {
      return "Hey";
    }
  }

  const app = new AppComponent();
  app.renders();

  // Guards  - вспомогательные конструкции, которые позволяют работать с типами

  function strip(x: string | number) {
    if (typeof x === "number") {
      x.toFixed(2);
    }
    if (typeof x === "string") {
      return x.trim();
    }
  }

  class MyResponse {
    header = "response header";
    result = "response result";
  }

  class MyError {
    header = "error header";
    message = "error message";
  }

  function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
      return { info: res.header + res.result };
    }
    if (res instanceof MyError) {
      return { info: res.header + res.message };
    }
  }

  //=====================================================

  type AlertType = "success" | "danger" | "warning";

  function setAlertType(type: AlertType) {}

  setAlertType("success");
  // setAlertType('other')

  //=======================Generic

  const arrayOfNumbers: Array<number> = [1, 1, 2, 5];

  const arrayOfStrings: Array<string> = ["test", "hello"];

  function reverseArr<T>(arr: Array<T>): Array<T> {
    return arr.reverse();
  }

  console.log(reverseArr(arrayOfNumbers));
  console.log(reverseArr(arrayOfStrings));

  //================operators

  interface Person {
    name: string;
    age: number;
  }

  type PersonKeys = keyof Person; //'name' | 'age'

  let key: PersonKeys = "name";

  type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
  };

  type UserKeysNoMeta = Pick<User, "name" | "email">;

  const user: UserKeysNoMeta = {
    // _id: 1,
    email: "ggg",
    name: "gggggg",
    // createdAt: new Date()
  };

  // const logClass = (constructor: Function) => {
  //   console.log(constructor)
  // }

  // @logClass

  // class UserClass {
  //   constructor(public name: string, public age: number) {}

  //   public getPath(): string {
  //     return `${this.name}${this.age}`
  //   }
  // }

  // Задача со скобками

  str = "([(text)]))"

  const pairTest = (str: string) => {
    //@ts-ignore
    const stack:any = [];
    const open = ['{', '[', '(']
    const close = ['}', ']', ')' ]
    let closeIndex
    let openIndex

    for (let i = 0; i < str.length; i++) {
      openIndex  = open.indexOf(str[i])
      if (openIndex !== -1) {
        stack.push(openIndex)
        continue
      }
     
      closeIndex = close.indexOf(str[i])
      if (closeIndex !== -1) {
        openIndex = stack.pop()
        if(closeIndex !== openIndex) {
          return false
        }
      }
    }

      if(stack.length !== 0) {
        return false
      }
      return true
    }
  

  console.log("Brackets", pairTest(str));
  return <></>;
};
