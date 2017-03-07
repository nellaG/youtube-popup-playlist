# vim: fileencoding=utf-8 tabstop=2 softtabstop=2 shiftwidth=2 expandtab


from sanic import Sanic
from sanic.response import json


app = Sanic()


@app.route("/")
async def index(request):
  return json({"hello": "world"})

