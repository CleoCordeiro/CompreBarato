import pymongo

class ConnectFactory:
    def __init__(self):
        self.myclient = self.get_connect()
        self.mydb = self.get_db()
        self.mycol = self.get_collection()

    def get_connect(self):
        return pymongo.MongoClient(
            "mongodb+srv://Sayd:qAqqLOx5t8qQAvGm@comprebarato.3pj9g.mongodb.net/?retryWrites=true&w=majority",
                     maxPoolSize=200)


    def get_db(self):
        return self.myclient["comprebarato"]

    def get_collection(self):
        return self.mydb.products

    def saveProductsMongodbUnique(self, productList):
        for product in productList:

            self.mycol.update_one(
                {'_id': product.getDictOfProduct()['id']},
                {'$set': product.getDictOfProduct()},
                upsert=True
            )