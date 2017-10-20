# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-10-19 12:41
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=255)),
                ('definition', models.TextField(blank=True, null=True)),
                ('context', models.TextField(blank=True, null=True)),
                ('language', models.CharField(max_length=2)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='notes', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('language',),
            },
        ),
    ]
