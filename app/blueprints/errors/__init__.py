from flask import Blueprint

errors = Blueprint('errors', __name__, template_folder='templates', static_folder='static', url_prefix='/errors')

from app.blueprints.errors import handlers