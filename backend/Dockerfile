#Pull base image
#if you get a django.db.utils.OperationalError: SCRAM authentication requires libpq version 10 or above add --platform=linux/amd64 before the python base image
FROM python:3.12.0rc3-bookworm

#set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
#Python will not try to write .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
#console output is not buffered by Docker
ENV PYTHONUNBUFFERED 1

# set work directory
WORKDIR /code/backend

#Install dependencies
COPY ./requirements.txt .
RUN python3 -m pip install -r requirements.txt

#copy project
COPY . .
