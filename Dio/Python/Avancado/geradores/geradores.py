import requests


def fetch_products(apiURL, maxPages=100):
    page = 1
    while page <= maxPages:
        response = requests.get(f"{apiURL}?page={page}")
        data = response.json()
        for product in data["products"]:
            yield product
        if 'nextPage' not in data:
            break
        page += 1


for product in fetch_products('http://api.example.com/products',):
    print(product['name'])
