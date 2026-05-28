export class Human {
  age: number | undefined;
  name: string | undefined;
  sex: "male" | "female" | undefined = undefined;
  race:
    | "caucasian"
    | "black"
    | "asian"
    | "hispanic"
    | "native"
    | "other"
    | undefined = undefined;

  public readonly tostring = (): string => {
    return `Name: ${this.name}\nAge: ${this.age}\nSex: ${this.sex}\nRace: ${this.race}`;
  };
}
