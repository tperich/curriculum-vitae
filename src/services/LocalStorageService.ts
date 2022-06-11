class LocalStorageService {
  public setItem = <Item>(key: string, data: Item): void => {
    const stringified = JSON.stringify(data);
    window.localStorage.setItem(key, stringified);
  };

  public getItem = <Item>(key: string): Item | null => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }

    return null;
  };

  public clearItem = (key: string): void => {
    const item = window.localStorage.getItem(key);
    if (item) {
      window.localStorage.removeItem(key);
    } else {
      throw new Error(`${key} item not found in local storage`);
    }
  };
}

export default new LocalStorageService();
