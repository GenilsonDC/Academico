# Generated by Django 4.2.2 on 2023-06-23 21:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_rename_email_usuarios_email_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuarios',
            old_name='SORENOME',
            new_name='SOBRENOME',
        ),
    ]