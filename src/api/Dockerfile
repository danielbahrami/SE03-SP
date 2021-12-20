FROM python:latest

WORKDIR /template

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . /template/src/api

EXPOSE 5000

CMD [ "python", "./template/src/flask/app.py" ]
