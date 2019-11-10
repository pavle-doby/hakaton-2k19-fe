export class MyToken {
  constructor(
    public access: string,
    public refresh: string,
    public username: string
  ) {}
}
