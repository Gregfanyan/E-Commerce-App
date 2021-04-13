"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../models/Users"));
const Products_1 = __importDefault(require("../models/Products"));
function create(user) {
    return user.save();
}
function findById(userId) {
    return Users_1.default.findById(userId)
        .exec()
        .then((user) => {
        if (!user) {
            throw new Error(`Users ${userId} not found`);
        }
        return user;
    });
}
function findAll() {
    return Users_1.default.find().populate('cart').sort({ firstName: 1 }).exec();
}
function update(userId, update) {
    return Users_1.default.findById(userId)
        .exec()
        .then((user) => {
        if (!user) {
            throw new Error(`User ${userId} not found`);
        }
        if (update.firstName) {
            user.firstName = update.firstName;
        }
        if (update.lastName) {
            user.lastName = update.lastName;
        }
        if (update.password) {
            user.password = update.password;
        }
        if (update.email) {
            user.email = update.email;
        }
        if (update.isAdmin) {
            user.isAdmin = update.isAdmin;
        }
        if (update.cart) {
            user.cart = update.cart;
        }
        return user.save();
    });
}
function findUserByEmail(email) {
    return Users_1.default.findOne({ email: email }).exec();
}
function deleteUser(userId) {
    return Users_1.default.findByIdAndDelete(userId).exec();
}
const addProductToCart = (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users_1.default.findById(userId).select('-password').exec();
    if (!user) {
        throw new Error(`User ${userId} not found`);
    }
    const selectedProduct = yield Products_1.default.findById(productId).exec();
    if (!selectedProduct) {
        throw new Error(`Product ${selectedProduct} not found`);
    }
    const itemAdded = user.cart.find((item) => item.product === productId);
    if (!itemAdded) {
        user.cart.push(productId);
    }
    return yield user.save();
});
/* const addProductToCart = async (
  userId: string,
  productId: any
): Promise<UserDocument> => {
  const user = await Users.findById(userId).select('-password').exec()
  if (!user) {
    throw new Error(`User ${userId} not found`)
  }
  const selectedProduct = await Products.findById(productId).exec()
  if (!selectedProduct) {
    throw new Error(`Product ${selectedProduct} not found`)
  }
  console.log('selectedProduct', selectedProduct)

  const itemAdded = user.cart.find(
    (item: any) => item.product === selectedProduct.id
  )
  console.log('itemAdded', itemAdded)

  if (!itemAdded) {
    user.cart.push(selectedProduct)
  }
  return await user.save()
}
 */
exports.default = {
    create,
    findById,
    findAll,
    update,
    deleteUser,
    findUserByEmail,
    addProductToCart,
};
//# sourceMappingURL=Users.js.map