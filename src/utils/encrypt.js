import bcrypt from 'bcrypt';
const saltRounds = 10;

const encrypt = (productId) => {
  bcrypt.hash(productId, 10, function(err, hash) {
    if (err) {
      console.log("Error generating hash: ", err);
      return;
    }

    return hash;
  });
}

export default encrypt;