import http.server
import socketserver
import json
import sqlite3
import os
import sys
from urllib.parse import parse_qs, urlparse

PORT = 8000
DB_FILE = 'bukinist.db'

# Initialize SQLite database and create tables
def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Books Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS books (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            genre TEXT NOT NULL,
            price INTEGER NOT NULL,
            rating REAL,
            ratingCount INTEGER,
            pages INTEGER,
            binding TEXT,
            year INTEGER,
            condition TEXT,
            coverStyle TEXT,
            coverTextColor TEXT,
            description TEXT,
            longDescription TEXT,
            coverUrl TEXT
        )
    ''')
    
    # Run migration if table exists but doesn't have coverUrl column
    try:
        cursor.execute("ALTER TABLE books ADD COLUMN coverUrl TEXT")
        conn.commit()
    except sqlite3.OperationalError:
        pass
    
    # Orders Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            date TEXT NOT NULL,
            clientName TEXT NOT NULL,
            clientPhone TEXT NOT NULL,
            clientInstagram TEXT,
            deliveryMethod TEXT NOT NULL,
            clientAddress TEXT,
            totalPay TEXT NOT NULL,
            totalPayVal INTEGER NOT NULL,
            status TEXT NOT NULL,
            items TEXT NOT NULL -- JSON string of ordered items
        )
    ''')
    
    # Messages Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            name TEXT NOT NULL,
            contact TEXT NOT NULL,
            message TEXT NOT NULL
        )
    ''')
    
    conn.commit()
    
    # Seed default books if empty
    cursor.execute("SELECT COUNT(*) FROM books")
    if cursor.fetchone()[0] == 0:
        default_books = [
            {
                "id": "book-politics-1",
                "title": "О тирании. Двадцать уроков двадцатого века",
                "author": "Тимоти Снайдер",
                "genre": "politics",
                "price": 3200,
                "rating": 4.8,
                "ratingCount": 37,
                "pages": 128,
                "binding": "Мягкий переплет (Pocket)",
                "year": 2020,
                "condition": "Отличное (б/у)",
                "coverStyle": "linear-gradient(135deg, #2b3a4a, #1a242f)",
                "coverTextColor": "#e2e8f0",
                "description": "Тимоти Снайдер, ведущий историк двадцатого века, предлагает двадцать кратких и содержательных уроков, извлеченных из крушения демократий в Европе. Эта книга — практическое руководство по сопротивлению авторитаризму и защите свободы в современном мире.",
                "longDescription": "Как выживают демократии и почему они рушатся? Тимоти Снайдер показывает, что современное общество не защищено от тех же ошибок, которые привели к тоталитарным режимам XX века. Написанная простым языком, книга представляет собой лаконичную инструкцию для гражданского сознания: почему важно поддерживать институты, беречь язык от штампов, доверять фактам и не подчиняться заранее."
            },
            {
                "id": "book-politics-2",
                "title": "Государство",
                "author": "Платон",
                "genre": "politics",
                "price": 4500,
                "rating": 4.9,
                "ratingCount": 54,
                "pages": 448,
                "binding": "Твердый переплет, суперобложка",
                "year": 2022,
                "condition": "Хорошее (винтажное б/у)",
                "coverStyle": "linear-gradient(135deg, #5b7056, #3f503c)",
                "coverTextColor": "#fdfbf7",
                "description": "Фундаментальный философский диалог Платона, посвященный проблеме идеального государства, справедливости и роли философов в управлении обществом. Столп мировой политической мысли в подарочном оформлении.",
                "longDescription": "В «Государстве» Платон через диалоги Сократа конструирует модель идеального полиса, где каждый класс выполняет свою функцию, а правят мудрецы-философы. Здесь же содержится знаменитый миф о пещере — аллегория человеческого познания и иллюзорности нашего восприятия. Настоящее интеллектуальное украшение вашей библиотеки в эстетичной тканевой обложке."
            },
            {
                "id": "book-politics-3",
                "title": "Левиафан, или Материя, форма и власть государства",
                "author": "Томас Гоббс",
                "genre": "politics",
                "price": 5200,
                "rating": 4.6,
                "ratingCount": 29,
                "pages": 672,
                "binding": "Твердый переплет",
                "year": 2021,
                "condition": "Отличное (б/у)",
                "coverStyle": "linear-gradient(135deg, #423b32, #29241f)",
                "coverTextColor": "#eae2d5",
                "description": "Классический трактат о природе человека, общества и абсолютной государственной власти. Книга, заложившая основы теории общественного договора.",
                "longDescription": "Томас Гоббс описывает естественное состояние людей как «войну всех против всех» и предлагает выход через создание Левиафана — всемогущего государства, которому граждане добровольно передают часть свобод в обмен на безопасность и порядок. Труд, который до сих пор вызывает бурные дебаты в политической теории."
            },
            {
                "id": "book-philosophy-1",
                "title": "Наедине с собой",
                "author": "Марк Аврелий",
                "genre": "philosophy",
                "price": 3900,
                "rating": 4.9,
                "ratingCount": 88,
                "pages": 320,
                "binding": "Твердый переплет, тиснение фольгой",
                "year": 2023,
                "condition": "Отличное (как новая, б/у)",
                "coverStyle": "linear-gradient(135deg, #cc7852, #a65c3a)",
                "coverTextColor": "#fdfbf7",
                "description": "Личные дневниковые записи римского императора Марка Аврелия Антонина, ставшие памятником стоической философии. Книга о том, как сохранять мир в душе в эпицентре хаоса.",
                "longDescription": "Написанная в военных походах, эта книга никогда не предназначалась для публикации. Это интимный разговор императора со своей совестью. Стоическая мудрость учит нас разделять вещи на подконтрольные нам и неподконтрольные, спокойно принимать удары судьбы и честно выполнять свой долг перед обществом. Идеальная книга для чтения прохладным уютным вечером."
            },
            {
                "id": "book-philosophy-2",
                "title": "Нравственные письма к Луцилию",
                "author": "Луций Анней Сенека",
                "genre": "philosophy",
                "price": 4800,
                "rating": 4.8,
                "ratingCount": 65,
                "pages": 512,
                "binding": "Твердый переплет, ляссе",
                "year": 2023,
                "condition": "Отличное (б/у)",
                "coverStyle": "linear-gradient(135deg, #8c6a56, #6b4d3c)",
                "coverTextColor": "#fdfbf7",
                "description": "Главное произведение Сенеки, написанное в форме писем к молодому другу. Практическое руководство по обретению мудрости, счастья и свободы от страхов.",
                "longDescription": "Сенека обращается к темам дружбы, времени, старости, богатства и смерти с невероятной теплотой и прямотой. Это не сухая догматика, а дружеский совет мудрого наставника. Письма наполнены афоризмами и практическими техниками для повседневного самоконтроля и ментальной стойкости."
            },
            {
                "id": "book-art-1",
                "title": "Искусство видеть",
                "author": "Джон Бёрджер",
                "genre": "art",
                "price": 4100,
                "rating": 4.7,
                "ratingCount": 45,
                "pages": 184,
                "binding": "Мягкий переплет (особая бумага)",
                "year": 2021,
                "condition": "Хорошее (есть пометки карандашом, б/у)",
                "coverStyle": "linear-gradient(135deg, #e3dac9, #c2b59b)",
                "coverTextColor": "#2c2520",
                "description": "Книга, перевернувшая представление о визуальном восприятии. Основана на знаменитом телесериале BBC и открывает скрытые идеологические смыслы классических полотен.",
                "longDescription": "Джон Бёрджер утверждает, что то, как мы смотрим на вещи, определяется нашими знаниями и убеждениями. Он разоблачает мистификацию искусства, показывает связь между живописью и современной рекламой, а также анализирует изображение женщины как объекта потребления. Книга снабжена множеством иллюстраций и читается на одном дыхании."
            },
            {
                "id": "book-art-2",
                "title": "О духовном в искусстве",
                "author": "Василий Кандинский",
                "genre": "art",
                "price": 3600,
                "rating": 4.5,
                "ratingCount": 22,
                "pages": 144,
                "binding": "Твердый переплет, минимализм",
                "year": 2020,
                "condition": "Отличное (б/у)",
                "coverStyle": "linear-gradient(135deg, #6c5c77, #4b3e54)",
                "coverTextColor": "#fdfbf7",
                "description": "Программный труд великого русского художника, заложивший теоретические основы абстрактного искусства. Погружение в психологию цвета и формы.",
                "longDescription": "В этой книге Кандинский объясняет переход от предметного искусства к беспредметному («чистой духовности»). Он сопоставляет цвета с музыкаческими инструментами, описывает душевную вибрацию, которую они вызывают, и провозглашает наступление эпохи Великой Духовности. Полезно для художников, дизайнеров и всех, кто хочет понимать язык авангарда."
            },
            {
                "id": "book-development-1",
                "title": "Атомные привычки. Как получить большие результаты благодаря малым изменениям",
                "author": "Джеймс Клир",
                "genre": "development",
                "price": 4900,
                "rating": 4.9,
                "ratingCount": 124,
                "pages": 352,
                "binding": "Твердый переплет, белая бумага",
                "year": 2022,
                "condition": "Отличное (как новая, б/у)",
                "coverStyle": "linear-gradient(135deg, #cc9c3f, #aa7b25)",
                "coverTextColor": "#fdfbf7",
                "description": "Мировой бестселлер по созданию полезных привычек и избавлению от вредных. Научный и практический подход к перестройке повседневного поведения.",
                "longDescription": "Джеймс Клир разрушает мифы о силе воли и мотивации. Вместо этого он предлагает четыре закона изменения поведения: сделайте привычку очевидной, привлекательной, простой и удовлетворяющей. Мелкие изменения в 1% каждый день на дистанции года дают колоссальный накопительный эффект. Книга снабжена удобными таблицами и схемами."
            },
            {
                "id": "book-development-2",
                "title": "Эссенциализм. Путь к простоте",
                "author": "Грег МакКеон",
                "genre": "development",
                "price": 4300,
                "rating": 4.7,
                "ratingCount": 71,
                "pages": 256,
                "binding": "Твердый переплет",
                "year": 2022,
                "condition": "Хорошее (небольшой износ обложки, б/у)",
                "coverStyle": "linear-gradient(135deg, #7c94a4, #576d7c)",
                "coverTextColor": "#fdfbf7",
                "description": "Манифест о том, как делать меньше, но лучше. Книга для тех, кто перегружен рутиной, чувствует нехватку времени, но при этом стоит на месте.",
                "longDescription": "Эссенциализм — это не тайм-менеджмент. Это систематическая дисциплина, помогающая определить самое важное, отсечь все лишнее и направить энергию на достижение максимальных результатов в приоритетных сферах. Помогает вернуть контроль над своей жизнью и научиться говорить твердое «нет» второстепенным вещам."
            },
            {
                "id": "book-development-3",
                "title": "Думай медленно... Решай быстро",
                "author": "Даниэль Канеман",
                "genre": "development",
                "price": 5900,
                "rating": 4.8,
                "ratingCount": 92,
                "pages": 656,
                "binding": "Твердый переплет, уплотненный форзац",
                "year": 2021,
                "condition": "Отличное (б/у)",
                "coverStyle": "linear-gradient(135deg, #4a6b6c, #2f494a)",
                "coverTextColor": "#fdfbf7",
                "description": "Труд нобелевского лауреата Даниэля Канемана о ловушках нашего разума. Объясняет работу двух систем мышления: интуитивной (быстрой) и логической (медленной).",
                "longDescription": "Почему мы принимаем нерациональные финансовые решения? Как работают когнитивные искажения, стереотипы и эвристики? Канеман проводит читателя через увлекательные эксперименты, показывая, как часто наш мозг ошибается, и учит использовать критическое мышление для осознанного выбора."
            }
        ]
        
        for book in default_books:
            cursor.execute('''
                INSERT INTO books (id, title, author, genre, price, rating, ratingCount, pages, binding, year, condition, coverStyle, coverTextColor, description, longDescription, coverUrl)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                book["id"], book["title"], book["author"], book["genre"], book["price"],
                book["rating"], book["ratingCount"], book["pages"], book["binding"], book["year"],
                book["condition"], book["coverStyle"], book["coverTextColor"], book["description"], book["longDescription"],
                book.get("coverUrl", "")
            ))
        conn.commit()
    conn.close()

# Request handler to parse REST API and serve files
class CozyStoreHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)
        
        if path == '/api/books':
            self.get_books()
        elif path == '/api/orders':
            self.get_orders()
        elif path == '/api/messages':
            self.get_messages()
        else:
            # Standard static server
            super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        if path == '/api/books':
            self.add_book()
        elif path == '/api/orders':
            self.add_order()
        elif path == '/api/messages':
            self.add_message()
        else:
            self.send_response(404)
            self.end_headers()

    def do_PUT(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        # /api/orders/status
        if path.startswith('/api/orders/') and path.endswith('/status'):
            # Extract order ID: /api/orders/<id>/status
            parts = path.split('/')
            if len(parts) >= 4:
                order_id = parts[3]
                self.update_order_status(order_id)
                return
        
        self.send_response(404)
        self.end_headers()

    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)
        
        if path == '/api/books':
            book_id = query.get('id', [None])[0]
            if book_id:
                self.delete_book(book_id)
            else:
                self.send_error(400, "Missing id parameter")
        elif path == '/api/orders':
            order_id = query.get('id', [None])[0]
            if order_id:
                self.delete_order(order_id)
            else:
                self.clear_orders()
        elif path == '/api/messages':
            msg_id = query.get('id', [None])[0]
            if msg_id:
                self.delete_message(msg_id)
            else:
                self.clear_messages()
        else:
            self.send_response(404)
            self.end_headers()

    # --- API IMPLEMENTATIONS ---
    
    def get_books(self):
        try:
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM books")
            rows = cursor.fetchall()
            books = [dict(row) for row in rows]
            conn.close()
            
            self.send_json_response(books)
        except Exception as e:
            self.send_error_response(str(e))

    def add_book(self):
        try:
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            book = json.loads(body.decode('utf-8'))
            
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO books (id, title, author, genre, price, rating, ratingCount, pages, binding, year, condition, coverStyle, coverTextColor, description, longDescription, coverUrl)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                book.get("id"), book.get("title"), book.get("author"), book.get("genre"), book.get("price"),
                book.get("rating", 5.0), book.get("ratingCount", 0), book.get("pages"), book.get("binding"), book.get("year"),
                book.get("condition"), book.get("coverStyle"), book.get("coverTextColor"), book.get("description"), book.get("longDescription"),
                book.get("coverUrl", "")
            ))
            conn.commit()
            conn.close()
            
            self.send_json_response({"status": "success", "message": "Book added successfully"}, 201)
        except Exception as e:
            self.send_error_response(str(e))

    def delete_book(self, book_id):
        try:
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("DELETE FROM books WHERE id = ?", (book_id,))
            conn.commit()
            conn.close()
            self.send_json_response({"status": "success", "message": f"Book {book_id} deleted"})
        except Exception as e:
            self.send_error_response(str(e))

    def get_orders(self):
        try:
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM orders ORDER BY date DESC")
            rows = cursor.fetchall()
            orders = []
            for row in rows:
                o = dict(row)
                # Parse items from JSON string back to list
                o['items'] = json.loads(o['items'])
                orders.append(o)
            conn.close()
            
            self.send_json_response(orders)
        except Exception as e:
            self.send_error_response(str(e))

    def add_order(self):
        try:
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            order = json.loads(body.decode('utf-8'))
            
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO orders (id, date, clientName, clientPhone, clientInstagram, deliveryMethod, clientAddress, totalPay, totalPayVal, status, items)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                order.get("id"), order.get("date"), order.get("clientName"), order.get("clientPhone"),
                order.get("clientInstagram"), order.get("deliveryMethod"), order.get("clientAddress"),
                order.get("totalPay"), order.get("totalPayVal"), order.get("status", "new"),
                json.dumps(order.get("items", [])) # Serialize items list to JSON string
            ))
            conn.commit()
            conn.close()
            
            self.send_json_response({"status": "success", "message": "Order logged successfully"}, 201)
        except Exception as e:
            self.send_error_response(str(e))

    def update_order_status(self, order_id):
        try:
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            data = json.loads(body.decode('utf-8'))
            status = data.get("status")
            
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("UPDATE orders SET status = ? WHERE id = ?", (status, order_id))
            conn.commit()
            conn.close()
            
            self.send_json_response({"status": "success", "message": f"Order {order_id} status updated to {status}"})
        except Exception as e:
            self.send_error_response(str(e))

    def delete_order(self, order_id):
        try:
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("DELETE FROM orders WHERE id = ?", (order_id,))
            conn.commit()
            conn.close()
            self.send_json_response({"status": "success", "message": f"Order {order_id} deleted"})
        except Exception as e:
            self.send_error_response(str(e))

    def clear_orders(self):
        try:
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("DELETE FROM orders")
            conn.commit()
            conn.close()
            self.send_json_response({"status": "success", "message": "All orders cleared"})
        except Exception as e:
            self.send_error_response(str(e))

    def get_messages(self):
        try:
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM messages ORDER BY id DESC")
            rows = cursor.fetchall()
            messages = [dict(row) for row in rows]
            conn.close()
            
            self.send_json_response(messages)
        except Exception as e:
            self.send_error_response(str(e))

    def add_message(self):
        try:
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            msg = json.loads(body.decode('utf-8'))
            
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO messages (date, name, contact, message)
                VALUES (?, ?, ?, ?)
            ''', (
                msg.get("date"), msg.get("name"), msg.get("contact"), msg.get("message")
            ))
            conn.commit()
            conn.close()
            
            self.send_json_response({"status": "success", "message": "Message saved successfully"}, 201)
        except Exception as e:
            self.send_error_response(str(e))

    def delete_message(self, msg_id):
        try:
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("DELETE FROM messages WHERE id = ?", (msg_id,))
            conn.commit()
            conn.close()
            self.send_json_response({"status": "success", "message": f"Message {msg_id} deleted"})
        except Exception as e:
            self.send_error_response(str(e))

    def clear_messages(self):
        try:
            conn = sqlite3.connect(DB_FILE)
            cursor = conn.cursor()
            cursor.execute("DELETE FROM messages")
            conn.commit()
            conn.close()
            self.send_json_response({"status": "success", "message": "All messages cleared"})
        except Exception as e:
            self.send_error_response(str(e))

    # --- JSON HELPERS ---
    
    def send_json_response(self, data, status_code=200):
        response_bytes = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(response_bytes)))
        self.end_headers()
        self.wfile.write(response_bytes)

    def send_error_response(self, error_message, status_code=500):
        self.send_json_response({"status": "error", "error": error_message}, status_code)


if __name__ == '__main__':
    init_db()
    print("Database initialized successfully.")
    
    handler = CozyStoreHandler
    # Enable quiet logging by overriding log_message if needed, or leave it standard.
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Server started at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
            sys.exit(0)
