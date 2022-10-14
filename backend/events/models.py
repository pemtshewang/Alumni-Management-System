from django.db import models
from alumni.models import Alumni

class Event(models.Model):
    title = models.CharField(max_length=100,null=False)
    description = models.TextField(max_length=500, null=False)
    date = models.DateField(null=False)
    time = models.TimeField()
    location = models.CharField(max_length=100,null=False,default=f"{title}")
    image = models.ImageField(upload_to="events/",default="events/default.png",max_length=500)
    author = models.ForeignKey(Alumni,on_delete=models.CASCADE)

    class Meta:
        ordering = ['-date','-time']
    
    def __str__(self) -> str:
        return self.title