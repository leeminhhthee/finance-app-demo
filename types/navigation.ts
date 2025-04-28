export type MainTabParamList = {
  Home: undefined;
  Account: undefined;
  NewTransaction: undefined;
  Statistics: undefined;
  Settings: undefined;
};

export type TransactionType = {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
  description?: string;
  wallet: string;
  color: string;
};
