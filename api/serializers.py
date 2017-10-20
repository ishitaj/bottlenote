from rest_framework import serializers

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from .models import Note


class UserSerializer(serializers.ModelSerializer):
    notes = serializers.PrimaryKeyRelatedField(many=True, queryset=Note.objects.all())
    class Meta:
        model = User
        fields = ('id', 'username', 'notes')

class PasswordSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    """
    newpass = serializers.CharField(required=True)
    def validate_new_password(self, value):
        validate_password(value)
        return value

class NoteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Note
        fields = ('id', 'word', 'definition', 'context', 'language', 'created', 'owner')
