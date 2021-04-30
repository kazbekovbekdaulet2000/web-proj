from django.db import models
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save

class Actor(models.Model):
    name = models.CharField(max_length = 255)
    surname = models.CharField(max_length = 255,null = True)
    birth_date = models.DateField(null = True, blank = True)
    death_date = models.DateField(null = True, blank = True)
    county = models.CharField(max_length = 50)
    person_details = models.CharField(max_length = 1000)
    awards = models.CharField(max_length = 50)
    award_nominations =models.CharField(max_length = 50)
    photo = models.URLField(max_length = 5000, null = True)
    
    def __str__(self):
        return self.name
    
    class Meta: 
        verbose_name = "Actor"
        verbose_name_plural = "Actors"


class Genres(models.Model):
    name = models.CharField(primary_key= True, max_length = 200)
    description = models.TextField(max_length = 1000)
    def __str__(self):
        return self.name
    
    class Meta: 
        verbose_name = "Genre"
        verbose_name_plural = "Genres"

class Director(models.Model):
    name = models.CharField(max_length = 50)
    surname = models.CharField(max_length = 255, null = True)
    birth_date = models.DateField(null = True, blank = True)
    death_date = models.DateField(null = True, blank = True)
    county = models.CharField(max_length = 50)
    person_details = models.CharField(max_length = 1000, null= True)
    awards = models.CharField(max_length = 50, null = True)
    award_nominations = models.CharField(max_length = 50, null = True)
    photo = models.URLField(max_length = 5000, null = True)
    
    def __str__(self):
        return self.name
        
    class Meta: 
        verbose_name = "Director"
        verbose_name_plural = "Directors"

class Comment(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, models.CASCADE, null = True)
    content = models.TextField(max_length = 1000)
    date = models.DateTimeField()

class Movies(models.Model):
    title = models.CharField(max_length = 100, null = False)
    year = models.IntegerField()
    description = models.CharField(max_length = 1000, null = True)
    genres = models.ManyToManyField(Genres, blank= True) #
    budget = models.IntegerField(editable = True, null = True, blank = True)
    rating = models.FloatField(blank = True, null = False)
    duration = models.IntegerField()
    county = models.CharField(max_length = 50, null = False)
    likes = models.IntegerField(blank=True, null = False, default = 0)
    poster = models.URLField(null = False)
    director = models.ForeignKey(Director, models.CASCADE,null =True, blank = True) #
    actors = models.ManyToManyField(Actor, blank = True) #
    comments = models.ManyToManyField(Comment, blank = True) #
    
    def __str__(self):
        return self.title

    class Meta: 
        verbose_name = "Movie"
        verbose_name_plural = "Movies"



class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='profile', on_delete = models.CASCADE)
    image = models.ImageField(default='media/user.png', upload_to='media')
    movies = models.ManyToManyField(Movies, blank = True    )    
    
    @receiver(post_save, sender = settings.AUTH_USER_MODEL)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user = instance)
    
    @receiver(post_save, sender = settings.AUTH_USER_MODEL)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
    
    def __str__(self):
        return f'{self.user.username}\'s profile'
    