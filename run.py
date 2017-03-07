# vim: fileencoding=utf-8 tabstop=2 softtabstop=2 shiftwidth=2 expandtab


from sanic import Sanic

from ypopup.app import app


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

