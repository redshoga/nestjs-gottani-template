FROM mysql:5.7.27

ADD ./change_char_set.cnf /etc/mysql/mysql.conf.d/.

EXPOSE 3306 43060

CMD ["mysqld"]