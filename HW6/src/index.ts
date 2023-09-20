abstract class Figure {
  constructor(
    public readonly color: string,
    public readonly name: string
  ) {}

  public abstract calculateArea(): number;
}

class Circle extends Figure {
  constructor(
    color: string,
    private readonly radius: number
  ) {
    super(color, 'Circle');
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Figure {
  constructor(
    color: string,
    private readonly width: number,
    private readonly height: number
  ) {
    super(color, 'Rectangle');
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public print(): void {
    console.log(`Площа = ширина x висота = ${this.width} x ${this.height}`);
  }
}

class Square extends Figure {
  constructor(
    color: string,
    private readonly side: number
  ) {
    super(color, 'Square');
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public print(): void {
    console.log(`Площа = сторона x сторона = ${this.side} x ${this.side}`);
  }
}

class Triangle extends Figure {
  constructor(
    color: string,
    private readonly base: number,
    private readonly height: number
  ) {
    super(color, 'Triangle');
  }

  public calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}
