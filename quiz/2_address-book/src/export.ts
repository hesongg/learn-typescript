interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// 여러개 한번에 export - 이렇게 안하고 각각 앞에 export 적어도 되긴함
export { Contact, PhoneType };
