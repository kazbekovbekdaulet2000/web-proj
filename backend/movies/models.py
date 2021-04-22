from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class Actor(models.Model):
    name = models.CharField(max_length = 50)
    birth_date = models.DateField(null = True, blank = True)
    death_date = models.DateField(null = True, blank = True)
    county = models.CharField(max_length = 50)
    person_details = models.CharField(max_length = 1000)
    awards = models.CharField(max_length = 50)
    award_nominations =models.CharField(max_length = 50)
    link = models.URLField(max_length = 1000, null = True)
    
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
    birth_date = models.DateField(null = True, blank = True)
    death_date = models.DateField(null = True, blank = True)
    county = models.CharField(max_length = 50)
    person_details = models.CharField(max_length = 1000, null= True)
    awards = models.CharField(max_length = 50, null = True)
    award_nominations = models.CharField(max_length = 50, null = True)
    link = models.URLField(max_length = 1000, null = True)
    
    def __str__(self):
        return self.name
        
    class Meta: 
        verbose_name = "Director"
        verbose_name_plural = "Directors"

class Movies(models.Model):
    movies_id = models.IntegerField(primary_key= True)
    title = models.CharField(max_length = 100, null = False)
    year = models.IntegerField()
    description = models.CharField(max_length = 1000, null = True)
    genres = models.ForeignKey(Genres, on_delete = models.SET_NULL, null = True)
    budget = models.IntegerField(editable = True, null = True, blank = True)
    rating = models.FloatField(blank = True, null = False)
    duration = models.IntegerField()
    county = models.CharField(max_length = 50, null = False)
    likes = models.IntegerField(blank=True, null = False, default = 0)
    poster = models.URLField(null = False)
    director = models.ForeignKey(Director, models.SET_NULL,null =True, blank = True)
    actors = models.ForeignKey(Actor, models.SET_NULL, null = True, blank = True)
    
    def __str__(self):
        return self.title

    class Meta: 
        verbose_name = "Movie"
        verbose_name_plural = "Movies"
