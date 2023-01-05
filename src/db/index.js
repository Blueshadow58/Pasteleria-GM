import * as Sqlite from 'expo-sqlite';

const db = Sqlite.openDatabase('db.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS cart (productId TEXT PRIMARY KEY NOT NULL, quantity INTEGER NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertProductToCart = (productId, quantity) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO cart (productId, quantity) VALUES (?, ?);`,
            [productId, quantity],
            (_, result) => {
            resolve(result);
            },
            (_, err) => {
            reject(err);
            }
        );
        });
    });
    return promise;
};

//Update the quantity of a product by 1 and if the stock will be 0, delete the product from the cart
export const updateProductQuantity = (productId,sumOrSubstract) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            `UPDATE cart SET quantity = quantity ${sumOrSubstract} 1 WHERE productId = ?;`,
            [productId],
            (_, result) => {
            resolve(result);
            },
            (_, err) => {
            reject(err);
            }
        );
        });
    });
    return promise;
};



export const fetchCart = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM cart;',
            [],
            (_, result) => {
            resolve(result);
            },
            (_, err) => {
            reject(err);
            }
        );
        });
    });
    return promise;
};

export const fetchCartById = (productId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM cart WHERE productId = ?;',
            [productId],
            (_, result) => {
            resolve(result);
            },
            (_, err) => {
            reject(err);
            }
        );
        });
    });
    return promise;
}

export const deleteProductFromCart = (productId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
        tx.executeSql(
            'DELETE FROM cart WHERE productId = ?;',
            [productId],
            (_, result) => {
            resolve(result);            
            },
            (_, err) => {
            reject(err);
            }
        );
        });
    });
    return promise;
}