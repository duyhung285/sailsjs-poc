# sailsjs-poc
A poc on SailsJS framework

- add mongodb adapter to sailsjs (https://sailsjs.com/documentation/tutorials/using-mongo-db)

- setup mongodb on Macx (https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/)

tar -zxvf mongodb-osx-x86_64-enterprise-4.0.6.tar
cp -r Users/trinhduyhung/Downloads/mongodb-osx-x86_64-enterprise-4.0.6/bin/ usr/local/bin
alternatively: export PATH=<mongodb-install-directory>/bin:$PATH
sudo mkdir -p /data/db
sudo chmod 764 data
sudo mongod
mongo
use foo

- generate a sign-up action (https://sailsjs.com/documentation/concepts/actions-and-controllers/generating-actions-and-controllers)
sails generate action user/signup --no-actions2

- negotiate errors (https://sailsjs.com/documentation/concepts/models-and-orm/errors, https://javascript.info/async-await)
