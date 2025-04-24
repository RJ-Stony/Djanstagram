from django.db import models

class Post(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, verbose_name="작성자")
    content = models.TextField("내용")
    created = models.DateTimeField("작성일시", auto_now_add=True)
    tags = models.ManyToManyField("posts.HashTag", verbose_name='해시태그 목록', blank=True)
    
    def __str__(self):
        return f'{self.user.username}의 Post(id: {self.id})'
    
class PostImage(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, verbose_name="포스트")
    photo = models.ImageField("사진", upload_to='post')

class Comment(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, verbose_name="작성자")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, verbose_name="포스트")
    content = models.TextField("내용")
    created = models.DateTimeField("작성일시", auto_now_add=True)
    
class HashTag(models.Model):
    name = models.CharField("태그명", max_length=50)
    
    def __str__(self):
        return self.name