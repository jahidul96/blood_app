interface Nav {
  [x: string]: any;
  navigate: (value: string) => void;
  goBack: () => void;
}

export { Nav };
