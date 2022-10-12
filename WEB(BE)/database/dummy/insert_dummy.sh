#!/bin/bash

echo "inserting dummy user..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < user.sql > /dev/null 2>&1
echo "inserting dummy user_category..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < user_category.sql > /dev/null 2>&1
echo "inserting dummy routine..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < routine.sql > /dev/null 2>&1
echo "inserting dummy user_routine..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < user_routine.sql > /dev/null 2>&1
echo "inserting dummy auth..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < auth.sql > /dev/null 2>&1
echo "inserting dummy goods..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < goods.sql > /dev/null 2>&1
echo "inserting dummy user_goods..."
mysql -uroot -p"$MYSQL_ROOT_PASSWORD" < user_goods.sql > /dev/null 2>&1
echo "Success!"