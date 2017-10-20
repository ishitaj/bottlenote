import json
from django.test import TestCase, Client
from django.test import Client
from django.contrib.auth.models import User

from .serializers import NoteSerializer

from .models import Note


class NoteModelTestCase(TestCase):
    """Tests for the note models"""

    def test_note_create(self):
        """
        This test creates a note, verifies
        that item is accessible, and then deletes it
        """ 
        Note.objects.create(word="Test",
            context="Test Item",
            definition="This is a test note item",
            language= "EN")

        note = Note.objects.get(word="Test")

        self.assertEqual(note.context, "Test Item")
        
        self.assertEqual(Note.objects.count(), 1)

        note.delete()

        try:
            retrieved_item = Note.objects.get(word="Test")
        except Note.DoesNotExist:
            retrieved_item = None

        self.assertEqual(retrieved_item, None)



class NoteSerializerTestCase(TestCase):
    """Tests for the note serializer"""

    def test_note_serializer_create(self):
        """
        Define some json data we expect to receive and use the 
        serializer to parse it into models. Test the models
        to make sure they're correct.
        """
        
        data = {
            "id": 1,
            "word": "Test",
            "definition": "Test",
            "context": "Test",
            "language": "EN",
        }

        # pass the data into the serializer to try and parse it
        serializer = NoteSerializer(data=data)
        # verify that the serializer thinks the data is valid
        self.assertTrue(serializer.is_valid())

        note = serializer.save()

        self.assertEqual(note.word, 'Test')


class NoteViewTestCase(TestCase):
    """Tests for the note views"""

    def setUp(self):
        """Initialize the TestCase with a test client"""
        self.client = Client()
        self.my_admin = User(username='user', is_staff=True)
        self.my_admin.set_password('passphrase')
        self.my_admin.save()
        self.test_list = Note.objects.create(word='Test Note')
        super(NoteViewTestCase, self).setUp()

    def test_user_auth_token(self):
        """
        Test the /api/obtain-auth-token/ POST method to
        get user token
        """
        post_data = {
            "word": "Test",
            "definition": "Test",
            "context": "Test",
            "language": "EN",
        }

        token = self.client.post(
            '/api/obtain-auth-token/',
            json.dumps({'username':'user', 'password':'passphrase'}),
            content_type='application/json')
        
        self.assertTrue(token.status_code, 200)
        