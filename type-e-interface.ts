type TUser = {
  id: number;
  name: string;
}

type Tpayment = {
  method: string;
}

type TAccount = TUser & Tpayment;

interface Iuser {
  id: number;
  name: string;
}

interface IPayment {
  method: string;
}

interface IAccount extends Iuser, IPayment {}