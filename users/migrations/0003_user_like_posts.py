# Generated by Django 5.2 on 2025-04-23 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_hashtag_post_tags'),
        ('users', '0002_user_profile_image_user_short_discription'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='like_posts',
            field=models.ManyToManyField(blank=True, related_name='like_users', to='posts.post', verbose_name='좋아요한 Post 목록'),
        ),
    ]
