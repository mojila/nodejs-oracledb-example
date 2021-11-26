# Install lib
```
sudo apt install libaio1
sudo mkdir -p /opt/oracle
sudo cd /opt/oracle
sudo wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip
sudo unzip instantclient-basic-linuxx64.zip
sudo sh -c "echo /opt/oracle/instantclient_21_4 > /etc/ld.so.conf.d/oracle-instantclient.conf"
sudo ldconfig
```