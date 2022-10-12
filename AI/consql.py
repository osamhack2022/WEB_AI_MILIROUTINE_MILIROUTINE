import pymysql
import a5t  # sql 아이디 비밀번호(코드스페이스에만, 커밋x) 

host="52.79.92.84"
user=a5t.user
password=a5t.password
port=53609
database="miliroutine_db"
use_unicode=True
charset='utf8'

def ex(q):
    con=pymysql.connect(host=host, user=a5t.user, passwd=a5t.password, db=database, port=port, use_unicode=True, charset='utf8')
    cur=con.cursor()
    cur.execute(q)
    ret=cur.fetchall()
    con.close()
    return ret