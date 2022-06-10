class Product:
    def __init__(self, id,name,price,url,imagem):
        self.id = id
        self.name = name
        self.price = price
        self.url = url
        self.imagem = imagem

    def getDictOfProduct(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "url": self.url,
            "imagem": self.imagem
        }