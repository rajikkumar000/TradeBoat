pip install requests websocket-client
import requests

API_KEY = 'your_api_key'
API_BASE_URL = 'https://api.angleone.trade'  # Update with the actual API URL

def place_order(symbol, side, quantity, price):
    endpoint = '/orders'
    url = API_BASE_URL + endpoint

    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }

    data = {
        'symbol': symbol,
        'side': side,
        'quantity': quantity,
        'price': price,
        # Other order parameters
    }

    response = requests.post(url, headers=headers, json=data)
    return response.json()

def main():
    symbol = 'AAPL'
    side = 'buy'
    quantity = 10
    price = 150.00

    response = place_order(symbol, side, quantity, price)
    print('Order Response:', response)

if __name__ == '__main__':
    main()
