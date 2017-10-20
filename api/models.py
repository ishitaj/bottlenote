from django.db import models

        
class Note(models.Model):
    word = models.CharField(max_length=255)
    definition = models.TextField(null=True, blank=True)
    context = models.TextField(null=True, blank=True)
    language = models.CharField(max_length=2)
    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('auth.User', related_name='notes', default=1)

    class Meta:
        ordering = ('language',)
