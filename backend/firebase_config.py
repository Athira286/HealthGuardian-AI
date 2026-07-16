import os
import json
import base64
import firebase_admin

from firebase_admin import credentials, firestore

if not firebase_admin._apps:

    encoded_key = os.getenv("FIREBASE_SERVICE_ACCOUNT")

    if encoded_key:
        decoded = base64.b64decode(encoded_key)
        service_account = json.loads(decoded)

        cred = credentials.Certificate(service_account)

    else:
        cred = credentials.Certificate("serviceAccountKey.json")

    firebase_admin.initialize_app(cred)

db = firestore.client()