## Other Types of Installations

### An instalation the ReportPortal on Ubuntu OS

_(provided by @Tset Noitamotua)_

Follow below steps if you like to have ReportPortal running on Ubuntu Zesty (17.04) with the latests Docker-CE version 17.05 and Docker-Compose 1.14

1. Enable apt transport over HTTPS
```shell
   sudo apt-get install \
   apt-transport-https \
   ca-certificates \
   curl \
   software-properties-common
```

2. Get apt-key for Docker repo
```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

3. Add Docker's repo to sources.list
```shell
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu zesty edge"
```
> ToDo: 3.  check if there is a stable version of Docker-CE for Zesty
>   ```shell
>   sudo add-apt-repository \
>   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
>   $(lsb_release -cs) \
>   stable"
>   ```

4. Install Docker-CE
```shell
   sudo apt update
   sudo apt install docker-ce
```

PROXY SETTINGS for Docker (you'll probably need this @work)
```shell
   mkdir -p /etc/systemd/system/docker.service.d
   sudo nano /etc/systemd/system/docker.service.d/http-proxy.conf
```
http-proxy.conf content
```txt
   [Service]
   Environment="HTTP_PROXY=http://proxyhost:port/" "NO_PROXY=localhost,127.0.0.1"
   # ALTERNATIV - if you are behind HTTPS proxy instead of just HTTP:
   # https-proxy.conf
   # Environment="HTTPS_PROXY=http://proxyhost:port/"
```

5. Restart Docker
```shell
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   #  TEST: systemctl show --property=Environment docker
   # >>> Environment=HTTP_PROXY=http://proxyhost:port/
```

6. Check that Docker is installed correctly
```shell
   sudo docker run hello-world
   # hello-world images will be download and run
   # your will see output e.g. "Hello from Docker!  ... "
```

7. DOCKER-COMPOSE installation from PIP! (apt gives you outdated version)
```shell
   sudo apt install python-pip
   sudo pip install docker-compose
```

8. REPORTPORTAL INSTALLATION
```shell
   mkdir reportportal
   cd reportportal
   # get the docker-compose file
   wget https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
   docker-compose up
```
This will take some time cause several images will be downloaded ... go grab a coffee :)
After download is completed and containers started open another terminal and run
`docker ps` to check that all containers from previous step are up and running.

9. Check that ReportPortal is running
In the VM opten browser to `0.0.0.0:8080` --> ReportPortal login page will open
**NOTE:** If you are behind a proxy you need to add `0.0.0.0` to the `NO_PROXY` (no_proxy) ENV.
After setting the port forwarding like explained in video PART 2 (link below) open browser on your host machine to `localhost:8080` or `127.0.0.1:8080` --> ReportPortal loginpage will open

OPTIONAL
If you don't like to write 'sudo' before each docker-command do this but be aware of possible security issue with that!
```shell
   sudo groupadd docker
   sudo usermod -aG docker $USER
```
**>>> RESTART VM!**

Helpful links (video tutorial)

> [Part 1](https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml)

> [Part 2](https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml)
