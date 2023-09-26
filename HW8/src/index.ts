function filterArr<T>(arr: T[], condition: (item: T) => boolean): T[] {
  return arr.filter(condition);
}

class Stack<T> {
  private items: T[] = [];

  private isEmpty(): boolean {
    return !!this.items.length;
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.items.pop();
  }

  public peek(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.items[this.items.length - 1];
  }
}

class Dictionary<K extends string | number | symbol, V> {
  private items: Record<K, V> = {} as Record<K, V>;

  public set(key: K, value: V): void {
    this.items[key] = value;
  }

  public get(key: K): V {
    return this.items[key];
  }

  public has(key: K): boolean {
    return key in this.items;
  }
}
