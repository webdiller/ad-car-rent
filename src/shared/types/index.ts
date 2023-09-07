export interface CarProps {
  number: number;
  title: string;
  description: string;
  images: string[];
  prices: Price;
}

interface Price {
  perOneDay: {
    price: number;
  };
  perTenDays: {
    price: number;
  };
}
