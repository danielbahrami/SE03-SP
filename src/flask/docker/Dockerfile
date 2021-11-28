#
FROM python:latest

# updating and installing latest versions


WORKDIR /template

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt .

# running all dependencies
RUN pip install -r requirements.txt

COPY . /template/src/flask/docker


CMD [ "python", "./template/src/flask/docker/flaskTest.py" ]