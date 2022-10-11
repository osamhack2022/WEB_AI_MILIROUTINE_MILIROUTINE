import pymysql

host="52.79.92.84"
user="miliroutine_developer"
password="2022MySQL!@"
port=53609
database="miliroutine_db"
use_unicode=True
charset='utf8'

# class con(pymysql.Connection):
#     def __init__(self):
#         self.host="52.79.92.84"
#         self.user="miliroutine_developer"
#         self.password="2022MySQL!@"
#         self.port=53609
#         self.database="miliroutine_db"
#         self.use_unicode=True
#         self.charset='utf8'
#     def ex(self,q):
#         cur=self.connect().cursor()
#         cur.execute(q)
#         rows=cur.fetchall()
#         return rows

# pymysql.Connection.connect()

def ex(q):
    con=pymysql.connect(host=host, user=user, passwd=password, db=database, port=port, use_unicode=True, charset='utf8')
    cur=con.cursor()
    cur.execute('SELECT * FROM user_routine WHERE user_no=1')
    ret=cur.fetchall()
    con.close()
    return ret
# con=pymysql.connect(host=host, user=user, passwd=password, db=database, port=port, use_unicode=True, charset='utf8')
# cur = con.cursor()
# cur.execute('SELECT * FROM user_routine WHERE user_no=1')
# rows = cur.fetchall()
# print(rows)
# con.close()