FROM python:latest

WORKDIR /template

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . /template/src/flask

EXPOSE 5000

CMD [ "python", "./template/src/flask/app.py" ]
