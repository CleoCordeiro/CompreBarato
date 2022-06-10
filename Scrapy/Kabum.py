from typing import Any

import requests
from DTO.ConnectFactory import ConnectFactory
from Model.Product import Product
from threading import Thread

class Kabum():

    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        }


    def start(self):
        productCategories =  self.getCategories()
        self.getPaginationOfCategories(productCategories)


    def getCategories(self):
        params = {
            'ativo': '1',
        }

        ProductsOFCategories = 'https://servicespub.prod.api.aws.grupokabum.com.br/catalog/v1/products-by-category/'
        CategoryApiUrl = 'https://servicespub.prod.api.aws.grupokabum.com.br/categoria/v1/categoria'
        response = requests.get(CategoryApiUrl, params=params, headers=self.headers).json()['categorias']

        listOfCategories = []

        for categorias in response:
            listOfCategories.append(ProductsOFCategories + categorias['amigavel'])

        return listOfCategories


    def getPaginationOfCategories(self, productCategories):
        params = {
        }

        for urls in productCategories:
            total_items_count = requests.get(urls, params=params, headers=self.headers).json()['meta']['total_items_count']
            self.getProducts(total_items_count, urls)


    def getProducts(self, total_items_count, urls):
        params = {
            'page_number': 0,
            'page_size': 200,
            'sort': '-price',
            'include': 'gift',
        }
        numberOfPages = int(total_items_count / params['page_size']) + 1
        listOfProducts = []
        for i in range(numberOfPages):
            params['page_number'] = i+1
            response = requests.get(urls, params=params, headers=self.headers).json()
            for responseProducts in response['data']:
                product = Product(
                    responseProducts['id'],
                    responseProducts['attributes']['title'],
                    responseProducts['attributes']['price_with_discount'],
                    f"https://www.kabum.com.br/produto/{responseProducts['id']}",
                    responseProducts['attributes']['photos']['g'][0],

                )
                #listOfProducts.append(product.__dict__)
                if product is not None:
                    listOfProducts.append(product)

        ConnectFactory().saveProductsMongodbUnique(listOfProducts)


