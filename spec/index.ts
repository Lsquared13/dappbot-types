import DappTypes from './dapp';
import ResponseTypes from './responses';
import UserTypes from './user';
import MethodTypes from './methods';
import * as Validators from './validators';

// These exports make it possible to do
// something like:
//
// import { Dapp, User } from 'dappbot-types';
//
export import Dapp = DappTypes;
export import User = UserTypes;
export import Methods = MethodTypes;
export import Response = ResponseTypes;
export import Validate = Validators;

// Declaring this namespace means we can
// group everything into one default export,
// supporting something like:
//
// import Types from 'dappbot-types';
//
export namespace DappbotTypes {
  export import Dapp = DappTypes;
  export import User = UserTypes;
  export import Methods = MethodTypes;
  export import Response = ResponseTypes;
  export import Validate = Validators;
}

export default DappbotTypes;