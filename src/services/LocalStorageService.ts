class LocalStorageService {
  public setItem = (key: string, data: any): void => {
    const stringified = JSON.stringify(data);
    window.localStorage.setItem(key, stringified);
  };

  public getItem = (key: string): any | null => {
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
