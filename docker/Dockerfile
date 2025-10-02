FROM docker.8x8.com:5000/8x8/hyperloop/centos7/java17:latest

ENV NODE_VERSION 16.19.0

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

ENV HOME /root

ENV NVM_DIR /root/.nvm

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN sudo yum -y remove git
RUN sudo yum -y remove git-*
RUN sudo yum -y install https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm
RUN sudo yum -y install git

RUN SONAR_VERSION="4.8.0.2856" \
  && wget -q https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_VERSION}-linux.zip \
  && mv /opt/sonar /opt/sonar-old \
  && mkdir -p /opt/sonar \
  && unzip sonar-scanner-cli-${SONAR_VERSION}-linux.zip -d /opt/sonar/ \
  && rm /usr/local/bin/sonar-scanner \
  && ln -s /opt/sonar/sonar-scanner-${SONAR_VERSION}-linux/bin/sonar-scanner /usr/local/bin/sonar-scanner \
  && rm sonar-scanner-cli-${SONAR_VERSION}-linux.zip

RUN echo -e '#!/bin/bash\nsource $NVM_DIR/nvm.sh && nvm $@' > /usr/bin/nvm \
    && chmod +x /usr/bin/nvm
RUN echo -e '#!/bin/bash\nsource $NVM_DIR/nvm.sh && node $@' > /usr/bin/node \
    && chmod +x /usr/bin/node
