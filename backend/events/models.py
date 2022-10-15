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

class Notification(models.Model):
    author = models.ForeignKey(Alumni,on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    title = models.CharField(max_length=100,null=False)
    description = models.TextField(max_length=500, null=False)
    image = models.ImageField(upload_to="notifications/",default="notifications/default.png",max_length=500)
    is_read = models.BooleanField(default=False)
    receiver = models.ForeignKey(Alumni,on_delete=models.CASCADE, related_name="+")

    def __str__(self) -> str:
        return f"{self.receiver}'s notification"
